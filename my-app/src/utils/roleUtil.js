export const getRole = (data) => {
    if (data === null || data === undefined) {
        return null;
    }

    if (data.role) {
            return data.role;
    }
}