import { Args, Query, Resolver } from '@nestjs/graphql';

// import { UsersService } from '../services/users.service';

@Resolver('User')
export class UsersResolver {
    constructor() {}

    @Query()
    user(@Args('id') id: string) {
        return '';
    }

    @Query()
    users() {
        return []
    }
}
