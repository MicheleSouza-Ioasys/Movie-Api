import { User } from "shared/database/entities/user.entity";
import { EntityRepository, getRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private ormRepository: Repository<User>;
}