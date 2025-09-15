const base_url = import.meta.env.VITE_NEXTJS_API_URL;
import { ScriptRegistrationRequest, CodeApplication, CustomCode, ApplicationStatus } from "../../types/types";

export const customCodeApi = {
  // Register a new script
  registerScript: async (params: ScriptRegistrationRequest, token: string) => {
    const response = await fetch(`${base_url}/api/custom-code/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });
    return response.json();
  },

  // Get list of registered scripts
  getScripts: async (siteId: string, token: string) => {
    const response = await fetch(
      `${base_url}/api/custom-code/register?siteId=${siteId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  // Apply script to site or page
  applyScript: async (params: CodeApplication, token: string) => {
    const response = await fetch(`${base_url}/api/custom-code/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });
    console.log(params);
    return response.json();
  },

  // Get status for site
  getSiteStatus: async (siteId: string, token: string) => {
    const response = await fetch(
      `${base_url}/api/custom-code/status?targetType=site&targetId=${siteId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  // Get status for pages
  getPagesStatus: async (pageIds: string[], token: string) => {
    const response = await fetch(
      `${base_url}/api/custom-code/status?targetType=page&targetIds=${pageIds.join(
        ","
      )}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  // Get batch status request
  getBatchStatus: async (
    siteId: string,
    pageIds: string[] = [],
    token: string
  ) => {
    try {
      // Validate siteId
      if (!siteId || siteId === "page") {
        console.warn("Invalid siteId provided to getBatchStatus:", siteId);
        return {};
      }

      // If no pageIds provided, just get site status
      if (!pageIds || pageIds.length === 0) {
        const siteStatus = await customCodeApi.getSiteStatus(siteId, token);
        return siteStatus.result || {};
      }

      const batchSize = 5;
      const pagesBatches = [];

      for (let i = 0; i < pageIds.length; i += batchSize) {
        pagesBatches.push(pageIds.slice(i, i + batchSize));
      }

      // Get site status
      const siteStatus = await customCodeApi.getSiteStatus(siteId, token);

      // Get pages status in batches
      const pagesStatus = { result: {} };
      for (const batch of pagesBatches) {
        const batchStatus = await customCodeApi.getPagesStatus(batch, token);
        pagesStatus.result = { ...pagesStatus.result, ...batchStatus.result };
      }

      return {
        ...siteStatus.result,
        ...pagesStatus.result,
      };
    } catch (error) {
      console.error(
        "Error in getBatchStatus:",
        { siteId, pageIdsLength: pageIds?.length },
        error
      );
      return {};
    }
  },
};

// Standardized API service with consistent method names
export const CustomCodeAPI = {
  /**
   * Register a new script
   */
  registerScript: async (params: ScriptRegistrationRequest, token: string): Promise<CustomCode> => {
    const response = await customCodeApi.registerScript(params, token);
    if (!response.success) {
      throw new Error(response.message || 'Failed to register script');
    }
    return response.data;
  },

  /**
   * Get list of registered scripts for a site
   */
  getRegisteredScripts: async (siteId: string, token: string): Promise<CustomCode[]> => {
    const response = await customCodeApi.getScripts(siteId, token);
    if (!response.success) {
      throw new Error(response.message || 'Failed to get scripts');
    }
    return response.data || [];
  },

  /**
   * Apply script to a target (site or page)
   */
  applyScript: async (params: CodeApplication, token: string): Promise<void> => {
    const response = await customCodeApi.applyScript(params, token);
    if (!response.success) {
      throw new Error(response.message || 'Failed to apply script');
    }
  },

  /**
   * Get application status for a script across targets
   */
  getApplicationStatus: async (scriptId: string, siteId: string, token: string): Promise<ApplicationStatus> => {
    // This would need to be implemented based on your API structure
    // For now, return the batch status which gives us the current state
    const status = await customCodeApi.getBatchStatus(siteId, [], token);
    
    // Transform the status to match ApplicationStatus interface
    const applicationStatus: ApplicationStatus = {};
    
    if (status[siteId] && status[siteId][scriptId]) {
      applicationStatus[siteId] = {
        isApplied: true,
        location: status[siteId][scriptId].location
      };
    }
    
    return applicationStatus;
  },

  /**
   * Remove script from a target
   */
  removeScript: async (scriptId: string, targetType: "site" | "page", targetId: string, token: string): Promise<void> => {
    // This would need to be implemented in your backend
    // For now, throw an error indicating it's not implemented
    const response = await fetch(`${base_url}/api/custom-code/remove`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        scriptId,
        targetType,
        targetId
      }),
    });
    
    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || 'Failed to remove script');
    }
  }
};
