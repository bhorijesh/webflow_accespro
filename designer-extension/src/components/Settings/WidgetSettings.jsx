import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeftIcon, 
  Cog6ToothIcon, 
  PaintBrushIcon, 
  CubeIcon, 
  CodeBracketIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import IconPosition from "./widgetsettings/IconPosition";
import SelectIcon from "./widgetsettings/SelectIcon";
import BadgeStyle from "./widgetsettings/BadgeStyle";
import WidgetSettingsActions from "./widgetsettings/WidgetSettingsActions";
import BrandingAndColors from "./widgetsettings/BrandingAndColors";
import WidgetLayoutSettings from "./widgetsettings/WidgetLayoutSettings";
import CustomCSS from "./widgetsettings/CustomCSS";

const WIDGETSETTINGS_TEXT = {
  brandingAndColors: {
    title: "Branding & Colors",
    description: "Customize your widget's visual identity with brand colors and styling.",
    icon: PaintBrushIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  buttonAppearance: {
    title: "Button Appearance",
    description: "Configure the activation button's design, position, and visual style.",
    icon: SparklesIcon,
    gradient: "from-blue-500 to-cyan-500"
  },
  widgetLayout: {
    title: "Widget Layout & Settings",
    description: "Fine-tune layout, language preferences, and behavioral settings.",
    icon: CubeIcon,
    gradient: "from-green-500 to-emerald-500"
  },
  customCss: {
    title: "Custom CSS",
    description: "Add advanced styling with custom CSS for complete design control.",
    icon: CodeBracketIcon,
    gradient: "from-orange-500 to-red-500"
  },
};

const WidgetSettings = ({
  settings,
  onSettingsChange,
  saveSettings,
  loading,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced header with gradient background */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-6 py-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center justify-center w-10 h-10 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <ArrowLeftIcon className="w-5 h-5 text-slate-600 group-hover:text-slate-700 transition-colors" />
          </button>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Cog6ToothIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Widget Settings</h1>
              <p className="text-sm text-slate-600">Customize your accessibility widget</p>
            </div>
          </div>
        </div>
        <WidgetSettingsActions saveSettings={saveSettings} loading={loading} />
      </div>

      {/* Enhanced content area */}
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
        <WidgetSettingLayout
          title={WIDGETSETTINGS_TEXT.brandingAndColors.title}
          description={WIDGETSETTINGS_TEXT.brandingAndColors.description}
          icon={WIDGETSETTINGS_TEXT.brandingAndColors.icon}
          gradient={WIDGETSETTINGS_TEXT.brandingAndColors.gradient}
        >
          <BrandingAndColors
            settings={settings}
            handleChange={onSettingsChange}
          />
        </WidgetSettingLayout>

        <WidgetSettingLayout
          title={WIDGETSETTINGS_TEXT.buttonAppearance.title}
          description={WIDGETSETTINGS_TEXT.buttonAppearance.description}
          icon={WIDGETSETTINGS_TEXT.buttonAppearance.icon}
          gradient={WIDGETSETTINGS_TEXT.buttonAppearance.gradient}
        >
          <IconPosition
            selectedPosition={settings.icon_position}
            handleChange={onSettingsChange}
            padding={settings.padding}
          />
          <SelectIcon
            selectedIcon={settings.icon}
            handleChange={onSettingsChange}
          />
          <BadgeStyle
            style={settings.icon_style}
            size={settings.icon_size}
            fill={settings.icon_color_fill}
            stroke={settings.icon_color_stroke}
            handleChange={onSettingsChange}
          />
        </WidgetSettingLayout>

        <WidgetSettingLayout
          title={WIDGETSETTINGS_TEXT.widgetLayout.title}
          description={WIDGETSETTINGS_TEXT.widgetLayout.description}
          icon={WIDGETSETTINGS_TEXT.widgetLayout.icon}
          gradient={WIDGETSETTINGS_TEXT.widgetLayout.gradient}
        >
          <WidgetLayoutSettings
            data={settings}
            handleChange={onSettingsChange}
          />
        </WidgetSettingLayout>

        <WidgetSettingLayout
          title={WIDGETSETTINGS_TEXT.customCss.title}
          description={WIDGETSETTINGS_TEXT.customCss.description}
          icon={WIDGETSETTINGS_TEXT.customCss.icon}
          gradient={WIDGETSETTINGS_TEXT.customCss.gradient}
        >
          <CustomCSS
            customCss={settings.custom_css}
            handleChange={onSettingsChange}
          />
        </WidgetSettingLayout>
        </div>
      </div>
    </div>
  );
};

export default WidgetSettings;

const WidgetSettingLayout = ({ title, description, icon: Icon, gradient, children }) => {
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Enhanced header with gradient accent */}
      <div className="relative border-b border-slate-200/60 px-6 py-5 bg-gradient-to-r from-white to-slate-50/50">
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`} />
        <div className="flex items-start gap-4">
          <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
      
      {/* Enhanced content area */}
      <div className="p-6 bg-gradient-to-br from-white to-slate-50/30">
        {children}
      </div>
    </div>
  );
};
