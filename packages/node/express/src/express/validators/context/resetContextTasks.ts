import {PayloadValidator} from '../../types/payloadValidator';

export const validatePayloadForResetContextTasks: PayloadValidator = (payload: any) => {
    if (typeof payload !== 'object' || payload === null) {
        // Payload is required when updating context.
        return {
            success: false,
            error: 'Payload must be an object.',
        };
    }

    if (Object.keys(payload).length < 0 || Object.keys(payload).length > 2) {
        // Payload must have exactly two keys: contextId and data.
        return {
            success: false,
            error: 'Payload must have exactly two keys: contextId (required) and tasks (optional).',
        };
    }

    const contextId = payload.contextId;
    if (typeof contextId !== 'string' || !contextId) {
        // Context ID is required when updating context.
        return {
            success: false,
            error: 'Payload.contextId must be a non-empty string.',
        };
    }

    const tasks = payload.items;
    if (tasks !== undefined && typeof tasks !== 'object') {
        // When provided, data must be an object or null.
        return {
            success: false,
            error: 'When provided, Payload.tasks must be an object or null.',
        };
    }

    return {
        success: true,
        payload,
    };
};
