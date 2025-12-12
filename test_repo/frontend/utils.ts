/**
 * TypeScript utility functions for data processing
 */

interface User {
    id: number;
    name: string;
    email: string;
}

class UserService {
    async getUser(id: number): Promise<User> {
        return { id, name: 'Test', email: 'test@example.com' };
    }

    async updateUser(user: User): Promise<void> {
        console.log('Updating user', user);
    }
}

export const formatUserName = (user: User): string => {
    return `${user.name} (${user.email})`;
}
