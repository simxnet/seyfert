import type { GatewayInteractionCreateDispatchData } from 'discord-api-types/v10';
import { BaseInteraction } from '../../structures';
import type { UsingClient } from '../../commands';
export declare const INTERACTION_CREATE: (self: UsingClient, data: GatewayInteractionCreateDispatchData) => import("../../structures").ModalSubmitInteraction<boolean> | import("../../structures").AutocompleteInteraction<boolean> | import("../../structures").ChatInputCommandInteraction<boolean> | import("../../structures").UserCommandInteraction<boolean> | import("../../structures").MessageCommandInteraction<boolean> | import("../../structures").ButtonInteraction | import("../../structures").ChannelSelectMenuInteraction | import("../../structures").RoleSelectMenuInteraction | import("../../structures").MentionableSelectMenuInteraction | import("../../structures").UserSelectMenuInteraction | import("../../structures").StringSelectMenuInteraction<string[]> | BaseInteraction<boolean, import("discord-api-types/v10").APIPingInteraction>;