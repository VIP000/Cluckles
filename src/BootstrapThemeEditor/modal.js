(function (window) {
    "use strict";

    /**
	 * Allows modification of a Modal component in Bootstrap.
	 * 
	 * @class Modal
	 * @extends ThemeModifier
	 * 
	 * @param {ThemeEditor} editor instance which manages the less modifications.
	 * 
	 * @property {object} innerPadding The @modal-inner-padding variable which controls the Inner Padding of the Modal component.
	 * @property {object} titlePadding The @modal-title-padding variable which controls the Title Padding of the Modal component.
	 * @property {object} titleLineHeight The @modal-title-line-height variable which controls the Title Line Height of the Modal component.
	 * @property {object} contentBg The @modal-content-bg variable which controls the Content Background Color of the Modal component.
	 * @property {object} contentBorderColor The @modal-content-border-color variable which controls the Content Border Color of the Modal component.
	 * @property {object} contentFallbackBorderColor The @modal-content-fallback-border-color variable which controls the Content Fallback Border Color of the Modal component.
     * @property {object} backdropBg The @modal-backdrop-bg variable which controls the Backdrop Background Color of the Modal component.
     * @property {object} backdropOpacity The @modal-backdrop-opacity variable which controls the Backdrop Opacity of the Modal component.
     * @property {object} headerBorderColor The @modal-header-border-color variable which controls the Header Border Color of the Modal component.
     * @property {object} footerBorderColor The @modal-footer-border-color variable which controls the Footer Border Color of the Modal component.
     * 
     * @returns {undefined}
     */
    var Modal = function (editor) {
        ThemeModifier.call(this, editor); // Call parent constructor

        this.innerPadding = {
            variable: '@modal-inner-padding',
            value: null
        };
        this.titlePadding = {
            variable: '@modal-title-padding',
            value: null
        };
        this.titleLineHeight = {
            variable: '@modal-title-line-height',
            value: null
        };
        this.contentBg = {
            variable: '@modal-content-bg',
            value: null
        };
        this.contentBorderColor = {
            variable: '@modal-content-border-color',
            value: null
        };
        this.contentFallbackBorderColor = {
            variable: '@modal-content-fallback-border-color',
            value: null
        };
        this.backdropBg = {
            variable: '@modal-backdrop-bg',
            value: null
        };
        this.backdropOpacity = {
            variable: '@modal-backdrop-opacity',
            value: null
        };
        this.headerBorderColor = {
            variable: '@modal-header-border-color',
            value: null
        };
        this.footerBorderColor = {
            variable: '@modal-footer-border-color',
            value: null
        };

        this.modifiers = {
            innerPadding:               this.innerPadding,
            titlePadding:               this.titlePadding,
            titleLineHeight:            this.titleLineHeight,
            contentBg:                  this.contentBg,
            contentBorderColor:         this.contentBorderColor,
            contentFallbackBorderColor: this.contentFallbackBorderColor,
            backdropBg:                 this.backdropBg,
            backdropOpacity:            this.backdropOpacity,
            headerBorderColor:          this.headerBorderColor,
            footerBorderColor:          this.footerBorderColor
        };
    };

    // Inherit from parent Prototype and preserve constructor
    Modal.prototype = Object.create(ThemeModifier.prototype);
    Modal.constructor = Modal;

    /**
     * Gets the Inner Padding of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getInnerPadding = function () {
        return this.modifiers.innerPadding.value;
    };

    /**
     * Sets the Inner Padding of the Modal Component.
     * 
     * @param {string} innerPadding Sets the Modal Inner Padding.
     * 
     * @returns {string}
     */
    Modal.prototype.setInnerPadding = function (innerPadding) {
        this.modifiers.innerPadding.value = innerPadding + 'px';
        this.editor.queueModifications();
    };

    /**
     * Gets the Title Padding of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getTitlePadding = function () {
        return this.modifiers.titlePadding.value;
    };

    /**
     * Sets the Title Padding of the Modal Component.
     * 
     * @param {string} titlePadding Sets the Modal Title Padding.
     * 
     * @returns {string}
     */
    Modal.prototype.setTitlePadding = function (titlePadding) {
        this.modifiers.titlePadding.value = titlePadding + 'px';
        this.editor.queueModifications();
    };

    /**
     * Gets the Title Line Height of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getTitleLineHeight = function () {
        return this.modifiers.titleLineHeight.value;
    };

    /**
     * Sets the Title Line Height of the Modal Component.
     * 
     * @param {string} titleLineHeight Sets the Modal Title Line Height.
     * 
     * @returns {string}
     */
    Modal.prototype.setTitleLineHeight = function (titleLineHeight) {
        this.modifiers.titleLineHeight.value = titleLineHeight + 'px';
        this.editor.queueModifications();
    };

    /**
     * Gets the Content Background Color of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getContentBackgroundColor = function () {
        return this.modifiers.contentBg.value;
    };

    /**
     * Sets the Content Background Color of the Modal Component.
     * 
     * @param {string} contentBg Sets the Modal Content Background Color.
     * 
     * @returns {string}
     */
    Modal.prototype.setContentBackgroundColor = function (contentBg) {
        this.modifiers.contentBg.value = contentBg;
        this.editor.queueModifications();
    };

    /**
     * Gets the Content Border Color of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getContentBorderColor = function () {
        return this.modifiers.contentBorderColor.value;
    };

    /**
     * Sets the Content Border Color of the Modal Component.
     * 
     * @param {string} contentBorderColor Sets the Modal Content Border Color.
     * 
     * @returns {string}
     */
    Modal.prototype.setContentBorderColor = function (contentBorderColor) {
        this.modifiers.contentBorderColor.value = contentBorderColor;
        this.editor.queueModifications();
    };

    /**
     * Gets the Content Fallback Border Color of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getContentFallbackBorderColor = function () {
        return this.modifiers.contentFallbackBorderColor.value;
    };

    /**
     * Sets the Content Fallback Border Color of the Modal Component.
     * 
     * @param {string} contentFallbackBorderColor Sets the Modal Content Fallback Border Color.
     * 
     * @returns {string}
     */
    Modal.prototype.setContentFallbackBorderColor = function (contentFallbackBorderColor) {
        this.modifiers.contentFallbackBorderColor.value = contentFallbackBorderColor;
        this.editor.queueModifications();
    };

    /**
     * Gets the Backdrop Background Color of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getBackdropBackgroundColor = function () {
        return this.modifiers.backdropBg.value;
    };

    /**
     * Sets the Backdrop Background Color of the Modal Component.
     * 
     * @param {string} backdropBg Sets the Modal Backdrop Background Color.
     * 
     * @returns {string}
     */
    Modal.prototype.setBackdropBackgroundColor = function (backdropBg) {
        this.modifiers.backdropBg.value = backdropBg;
        this.editor.queueModifications();
    };

    /**
     * Gets the Backdrop Opacity of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getBackdropOpacity = function () {
        return this.modifiers.backdropOpacity.value;
    };

    /**
     * Sets the Backdrop Opacity of the Modal Component.
     * 
     * @param {string} backdropOpacity Sets the Modal Backdrop Opacity.
     * 
     * @returns {string}
     */
    Modal.prototype.setBackdropOpacity = function (backdropOpacity) {
        this.modifiers.backdropOpacity.value = backdropOpacity;
        this.editor.queueModifications();
    };

    /**
     * Gets the Header Border Color of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getHeaderBorderColor = function () {
        return this.modifiers.headerBorderColor.value;
    };

    /**
     * Sets the Header Border Color of the Modal Component.
     * 
     * @param {string} headerBorderColor Sets the Modal Header Border Color.
     * 
     * @returns {string}
     */
    Modal.prototype.setHeaderBorderColor = function (headerBorderColor) {
        this.modifiers.headerBorderColor.value = headerBorderColor;
        this.editor.queueModifications();
    };

    /**
     * Gets the Footer Border Color of the Modal Component.
     * 
     * @returns {string}
     */
    Modal.prototype.getFooterBorderColor = function () {
        return this.modifiers.footerBorderColor.value;
    };

    /**
     * Sets the Footer Border Color of the Modal Component.
     * 
     * @param {string} footerBorderColor Sets the Modal Footer Border Color.
     * 
     * @returns {string}
     */
    Modal.prototype.setFooterBorderColor = function (footerBorderColor) {
        this.modifiers.footerBorderColor.value = footerBorderColor;
        this.editor.queueModifications();
    };

    window.Modal = Modal;
})(window);