;
export const userLoginPayload = {
    type: 'object',
    properties: {
        userName: {
            type: 'string',
        },
        password: {
            type: 'string',
        }
    },
    required: [
        'userName',
        'password',
    ],
    additionalProperties: false,
};
//# sourceMappingURL=user.login.payload.js.map