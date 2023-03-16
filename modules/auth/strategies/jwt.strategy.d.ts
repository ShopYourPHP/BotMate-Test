import { User } from '@/entities/user.entity';
import { UserService } from '@modules/users/user.service';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(validationPayload: {
        email: string;
        sub: string;
    }): Promise<User>;
}
export {};
