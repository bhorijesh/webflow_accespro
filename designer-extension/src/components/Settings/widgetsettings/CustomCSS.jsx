import React from 'react'

const CustomCSS = ({ customCss, handleChange }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className='text-darkBlue font-semibold'>Custom CSS</div>
            <textarea
                value={customCss}
                onChange={(e) => handleChange("custom_css", e.target.value)}
                className="w-full h-full border border-gray-200 rounded-lg p-4"
                rows={5}
                placeholder='Enter your custom CSS here...'
            />
        </div>
    )
}

export default CustomCSS