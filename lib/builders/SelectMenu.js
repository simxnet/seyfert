"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringSelectOption = exports.StringSelectMenu = exports.ChannelSelectMenu = exports.MentionableSelectMenu = exports.RoleSelectMenu = exports.UserSelectMenu = exports.SelectMenu = void 0;
const v10_1 = require("discord-api-types/v10");
const __1 = require("..");
const functions_1 = require("../structures/extra/functions");
const Base_1 = require("./Base");
/**
 * Maps default values for Select Menus.
 * @template T - The type of SelectMenuDefaultValueType.
 * @param ids - The IDs of items to be mapped as default.
 * @param type - The type of default values.
 * @returns An array of default values.
 */
function mappedDefault(ids, type) {
    return ids.flat().map(id => ({ id, type }));
}
/**
 * Represents a base class for building Select Menus.
 * @template Select - The type of APISelectMenuComponent.
 * @template Interaction - The type of interaction.
 * @example
 * const selectMenu = new SelectMenu<APIUserSelectComponent, UserSelectMenuInteraction>();
 * selectMenu.setCustomId("user-select-menu");
 * selectMenu.setPlaceholder("Select a user");
 * selectMenu.run((interaction) => {
 *   // Handle select menu interaction
 * });
 */
class SelectMenu extends Base_1.BaseComponentBuilder {
    /**
     * Sets the custom ID for the select menu.
     * @param id - The custom ID for the select menu.
     * @returns The current SelectMenu instance.
     */
    setCustomId(id) {
        this.data.custom_id = id;
        return this;
    }
    /**
     * Sets the placeholder text for the select menu.
     * @param placeholder - The placeholder text.
     * @returns The current SelectMenu instance.
     */
    setPlaceholder(placeholder) {
        this.data.placeholder = placeholder;
        return this;
    }
    /**
     * Sets the maximum and minimum number of selected values for the select menu.
     * @param options - The maximum and minimum values.
     * @returns The current SelectMenu instance.
     */
    setValuesLength({ max, min }) {
        this.data.max_values = max;
        this.data.min_values = min;
        return this;
    }
    /**
     * Sets whether the select menu is disabled.
     *  [disabled=true] - Indicates whether the select menu is disabled.
     * @returns The current SelectMenu instance.
     */
    setDisabled(disabled = true) {
        this.data.disabled = disabled;
        return this;
    }
}
exports.SelectMenu = SelectMenu;
/**
 * Represents a Select Menu for selecting users.
 * @example
 * const userSelectMenu = new UserSelectMenu();
 * userSelectMenu.setCustomId("user-select");
 * userSelectMenu.addDefaultUsers("123456789", "987654321");
 */
class UserSelectMenu extends SelectMenu {
    constructor(data = {}) {
        super({ ...data, type: v10_1.ComponentType.UserSelect });
    }
    /**
     * Adds default selected users to the select menu.
     * @param users - User IDs to be added as default.
     * @returns The current UserSelectMenu instance.
     */
    addDefaultUsers(...users) {
        this.data.default_values = (this.data.default_values ?? []).concat(mappedDefault(users, v10_1.SelectMenuDefaultValueType.User));
        return this;
    }
    /**
     * Sets the default selected users for the select menu.
     * @param users - User IDs to be set as default.
     * @returns The current UserSelectMenu instance.
     */
    setDefaultUsers(...users) {
        this.data.default_values = mappedDefault(users, v10_1.SelectMenuDefaultValueType.User);
        return this;
    }
}
exports.UserSelectMenu = UserSelectMenu;
/**
 * Represents a Select Menu for selecting roles.
 * @example
 * const roleSelectMenu = new RoleSelectMenu();
 * roleSelectMenu.setCustomId("role-select");
 * roleSelectMenu.addDefaultRoles("123456789", "987654321");
 */
class RoleSelectMenu extends SelectMenu {
    constructor(data = {}) {
        super({ ...data, type: v10_1.ComponentType.RoleSelect });
    }
    /**
     * Adds default selected roles to the select menu.
     * @param roles - Role IDs to be added as default.
     * @returns The current RoleSelectMenu instance.
     */
    addDefaultRoles(...roles) {
        this.data.default_values = (this.data.default_values ?? []).concat(mappedDefault(roles, v10_1.SelectMenuDefaultValueType.Role));
        return this;
    }
    /**
     * Sets the default selected roles for the select menu.
     * @param roles - Role IDs to be set as default.
     * @returns The current RoleSelectMenu instance.
     */
    setDefaultRoles(...roles) {
        this.data.default_values = mappedDefault(roles, v10_1.SelectMenuDefaultValueType.Role);
        return this;
    }
}
exports.RoleSelectMenu = RoleSelectMenu;
/**
 * Represents a Select Menu for selecting mentionable entities.
 * @example
 * const mentionableSelectMenu = new MentionableSelectMenu();
 * mentionableSelectMenu.setCustomId("mentionable-select");
 */
class MentionableSelectMenu extends SelectMenu {
    constructor(data = {}) {
        super({ ...data, type: v10_1.ComponentType.MentionableSelect });
    }
    /**
     * Sets the default selected roles or users for the select menu.
     * @param mentionables - Role/User id and type to be set as default.
     * @returns The current MentionableSelectMenu instance.
     */
    setDefaultMentionables(...mentionables) {
        this.data.default_values = mentionables.flat().map(mentionable => ({
            id: mentionable.id,
            type: v10_1.SelectMenuDefaultValueType[mentionable.type],
        }));
        return this;
    }
    /**
     * Adds default selected roles or users for the select menu.
     * @param mentionables - Role/User id and type to be added as default.
     * @returns The current MentionableSelectMenu instance.
     */
    addDefaultMentionables(...mentionables) {
        this.data.default_values = (this.data.default_values ?? []).concat(mentionables.flat().map(mentionable => ({
            id: mentionable.id,
            type: v10_1.SelectMenuDefaultValueType[mentionable.type],
        })));
        return this;
    }
}
exports.MentionableSelectMenu = MentionableSelectMenu;
/**
 * Represents a Select Menu for selecting channels.
 * @example
 * const channelSelectMenu = new ChannelSelectMenu();
 * channelSelectMenu.setCustomId("channel-select");
 * channelSelectMenu.addDefaultChannels("123456789", "987654321");
 * channelSelectMenu.setChannelTypes([ChannelType.GuildText, ChannelType.GuildVoice]);
 */
class ChannelSelectMenu extends SelectMenu {
    constructor(data = {}) {
        super({ ...data, type: v10_1.ComponentType.ChannelSelect });
    }
    /**
     * Adds default selected channels to the select menu.
     * @param channels - Channel IDs to be added as default.
     * @returns The current ChannelSelectMenu instance.
     */
    addDefaultChannels(...channels) {
        this.data.default_values = (this.data.default_values ?? []).concat(mappedDefault(channels, v10_1.SelectMenuDefaultValueType.Channel));
        return this;
    }
    /**
     * Sets the default selected channels for the select menu.
     * @param channels - Channel IDs to be set as default.
     * @returns The current ChannelSelectMenu instance.
     */
    setDefaultChannels(...channels) {
        this.data.default_values = mappedDefault(channels, v10_1.SelectMenuDefaultValueType.Channel);
        return this;
    }
    /**
     * Sets the types of channels that can be selected in the menu.
     *  types - The types of channels.
     * @returns The current ChannelSelectMenu instance.
     */
    setChannelTypes(types) {
        this.data.channel_types = types;
        return this;
    }
}
exports.ChannelSelectMenu = ChannelSelectMenu;
/**
 * Represents a Select Menu for selecting string options.
 * @example
 * const stringSelectMenu = new StringSelectMenu();
 * stringSelectMenu.setCustomId("string-select");
 * stringSelectMenu.addOption(new StringSelectOption().setLabel("Option 1").setValue("option_1"));
 * stringSelectMenu.setOptions([
 *   { label: "Option 2", value: "option_2" },
 *   { label: "Option 3", value: "option_3" },
 * ]);
 */
class StringSelectMenu extends SelectMenu {
    constructor(data = {}) {
        super({ ...data, type: v10_1.ComponentType.StringSelect });
        this.data.options = (data.options ?? []).map(x => new StringSelectOption(x));
    }
    /**
     * Adds options to the string select menu.
     * @param options - Options to be added.
     * @returns The current StringSelectMenu instance.
     */
    addOption(...options) {
        this.data.options = this.data.options.concat(options.flat());
        return this;
    }
    /**
     * Sets the options for the string select menu.
     *  options - Options to be set.
     * @returns The current StringSelectMenu instance.
     */
    setOptions(options) {
        this.data.options = options;
        return this;
    }
    toJSON() {
        const { options, ...raw } = this.data;
        return {
            ...raw,
            options: this.data.options.map(x => x.toJSON()),
        };
    }
}
exports.StringSelectMenu = StringSelectMenu;
/**
 * Represents an individual option for a string select menu.
 * @example
 * const option = new StringSelectOption().setLabel("Option 1").setValue("option_1");
 */
class StringSelectOption {
    data;
    constructor(data = {}) {
        this.data = data;
    }
    /**
     * Sets the label for the option.
     *  label - The label for the option.
     * @returns The current StringSelectOption instance.
     */
    setLabel(label) {
        this.data.label = label;
        return this;
    }
    /**
     * Sets the value for the option.
     *  value - The value for the option.
     * @returns The current StringSelectOption instance.
     */
    setValue(value) {
        this.data.value = value;
        return this;
    }
    /**
     * Sets the description for the option.
     *  description - The description for the option.
     * @returns The current StringSelectOption instance.
     */
    setDescription(description) {
        this.data.description = description;
        return this;
    }
    /**
     * Sets whether the option is the default.
     *  [Default=true] - Indicates whether the option is the default.
     * @returns The current StringSelectOption instance.
     */
    setDefault(Default = true) {
        this.data.default = Default;
        return this;
    }
    /**
     * Sets the emoji for the option.
     * @param emoji - The emoji to set.
     * @returns The modified option instance.
     */
    setEmoji(emoji) {
        const resolve = (0, functions_1.resolvePartialEmoji)(emoji);
        if (!resolve)
            return (0, __1.throwError)('Invalid Emoji');
        this.data.emoji = resolve;
        return this;
    }
    /**
     * Converts the option to JSON format.
     * @returns The option data in JSON format.
     */
    toJSON() {
        return { ...this.data };
    }
}
exports.StringSelectOption = StringSelectOption;