import { PermissionFlagsBits } from 'discord-api-types/v10';
import type { PermissionStrings } from '../../common';
import { BitField, type BitFieldResolvable } from './BitField';
export declare class PermissionsBitField extends BitField<typeof PermissionFlagsBits> {
    Flags: {
        readonly CreateInstantInvite: bigint;
        readonly KickMembers: bigint;
        readonly BanMembers: bigint;
        readonly Administrator: bigint;
        readonly ManageChannels: bigint;
        readonly ManageGuild: bigint;
        readonly AddReactions: bigint;
        readonly ViewAuditLog: bigint;
        readonly PrioritySpeaker: bigint;
        readonly Stream: bigint;
        readonly ViewChannel: bigint;
        readonly SendMessages: bigint;
        readonly SendTTSMessages: bigint;
        readonly ManageMessages: bigint;
        readonly EmbedLinks: bigint;
        readonly AttachFiles: bigint;
        readonly ReadMessageHistory: bigint;
        readonly MentionEveryone: bigint;
        readonly UseExternalEmojis: bigint;
        readonly ViewGuildInsights: bigint;
        readonly Connect: bigint;
        readonly Speak: bigint;
        readonly MuteMembers: bigint;
        readonly DeafenMembers: bigint;
        readonly MoveMembers: bigint;
        readonly UseVAD: bigint;
        readonly ChangeNickname: bigint;
        readonly ManageNicknames: bigint;
        readonly ManageRoles: bigint;
        readonly ManageWebhooks: bigint;
        readonly ManageEmojisAndStickers: bigint;
        readonly ManageGuildExpressions: bigint;
        readonly UseApplicationCommands: bigint;
        readonly RequestToSpeak: bigint;
        readonly ManageEvents: bigint;
        readonly ManageThreads: bigint;
        readonly CreatePublicThreads: bigint;
        readonly CreatePrivateThreads: bigint;
        readonly UseExternalStickers: bigint;
        readonly SendMessagesInThreads: bigint;
        readonly UseEmbeddedActivities: bigint;
        readonly ModerateMembers: bigint;
        readonly ViewCreatorMonetizationAnalytics: bigint;
        readonly UseSoundboard: bigint;
        readonly CreateGuildExpressions: bigint;
        readonly CreateEvents: bigint;
        readonly UseExternalSounds: bigint;
        readonly SendVoiceMessages: bigint;
        readonly SendPolls: bigint;
        readonly UseExternalApps: bigint;
    };
    static All: bigint;
    keys: (bits?: BitFieldResolvable<typeof PermissionFlagsBits>[]) => PermissionStrings;
    has(...bits: BitFieldResolvable<typeof PermissionFlagsBits>[]): boolean;
    strictHas(...bits: BitFieldResolvable<typeof PermissionFlagsBits>[]): boolean;
}