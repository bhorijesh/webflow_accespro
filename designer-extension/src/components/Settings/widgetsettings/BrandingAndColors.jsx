import React from 'react'
import { colorsTemplateOptions } from '../../constants/colorTemplates'
import ColorPickerPopover from '../../common/ColorPicker'

const BrandingAndColors = ({ settings, handleChange }) => {

    const selectedTemplate = settings?.color_template || 'custom'

    const onTemplateSelect = (template) => {
        handleChange('color_template', template.name)

        Object.keys(template.colors).forEach((key) => {
            handleChange(key, template.colors[key])
        })
        handleChange('icon_color_fill', template.colors.menu_header_background_color)
        handleChange('icon_color_stroke', template.colors.menu_header_background_color)
    }


    return (
        <div className="flex flex-col gap-4 lg:gap-6">
            <h3 className='text-lg font-medium'>
                Color templates
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {colorsTemplateOptions.map((template) => (
                    <ColorTemplateItem
                        key={template.name}
                        template={template}
                        onSelect={onTemplateSelect}
                        isSelected={selectedTemplate === template.name}
                    />
                ))}

                <div className={`flex flex-col gap-0 border rounded-lg p-0 overflow-hidden cursor-pointer ${selectedTemplate === 'custom' ? 'border-2 border-brandingBlue' : 'border-gray-200'}`} onClick={() => handleChange('color_template', 'custom')}>
                    <div className='h-20 w-full grid grid-cols-2 items-center gap-2 py-2 border-b border-gray-200'>
                        <div className='size-7 rounded-full border border-gray-200 mx-auto' style={{ backgroundColor: settings.icon_color_fill }}></div>
                        <div className='size-7 rounded-full border border-gray-200 mx-auto' style={{ backgroundColor: settings.menu_content_color }}></div>
                        <div className='size-7 rounded-full border border-gray-200 mx-auto' style={{ backgroundColor: settings.menu_header_font_color }}></div>
                        <div className='size-7 rounded-full border border-gray-200 mx-auto' style={{ backgroundColor: settings.menu_header_background_color }}></div>
                    </div>
                    <div className='p-2 text-center'>
                        <h4 className='text-sm font-medium'>Custom</h4>
                    </div>
                </div>
            </div>
            {selectedTemplate === 'custom' && <CustomColorOptions settings={settings} handleChange={handleChange} />}
        </div>
    )
}

export default BrandingAndColors


const ColorTemplateItem = ({ template, onSelect, isSelected }) => {
    return (
        <div className={`flex flex-col gap-0 border rounded-lg p-0 overflow-hidden cursor-pointer ${isSelected ? 'border-2 border-brandingBlue' : 'border-gray-200'}`}
            onClick={() => onSelect(template)}
        >
            <div className='w-full h-20' style={{ backgroundColor: template.colors.menu_header_background_color }}></div>
            <div className='p-2 text-center'>
                <h4 className='text-sm font-medium'>{template.name}</h4>
            </div>
        </div>
    )
}


const CustomColorOptions = ({ settings, handleChange }) => {
    return (
        <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col gap-2">
                {/* <h4 className='text-lg font-medium'>
                    Icon colors
                </h4> */}
                <div className="grid grid-cols-2 gap-2">
                    <ColorPickerPopover label="Icon fill" value={settings.icon_color_fill} onChange={(color) => handleChange('icon_color_fill', color)} />
                    <ColorPickerPopover label="Icon stroke" value={settings.icon_color_stroke} onChange={(color) => handleChange('icon_color_stroke', color)} />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {/* <h4 className='text-lg font-medium'>
                    Menu colors
                </h4> */}
                <div className="grid grid-cols-2 gap-2">
                    <ColorPickerPopover label="Menu header background" value={settings.menu_header_background_color} onChange={(color) => handleChange('menu_header_background_color', color)} />
                    <ColorPickerPopover label="Menu header font" value={settings.menu_header_font_color} onChange={(color) => handleChange('menu_header_font_color', color)} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <ColorPickerPopover label="Menu content" value={settings.menu_content_color} onChange={(color) => handleChange('menu_content_color', color)} />
                </div>
            </div>
        </div>
    )
}