import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "shared/repositories/user.repository";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private repository: UserRepository,
    ) {}
}