import { TypegooseModule, TypegooseModuleOptions } from "nestjs-typegoose";

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(),
    ...getMongoOptions()
  }
}

// const getMongoString = (configService: ConfigService)