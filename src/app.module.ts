import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared.module';
import { TerminusModule } from '@nestjs/terminus';
import { EventStoreCqrsModule } from 'nestjs-eventstore';
import { eventStoreBusConfig } from './providers/event-bus.provider';

@Module({
  imports: [
    UsersModule,
    TerminusModule,
    TypeOrmModule.forRootAsync({
         imports: [SharedModule],
        useFactory: (configService: ConfigService) =>
            configService.typeOrmConfig,
        inject: [ConfigService],
    }),
  //   EventStoreCqrsModule.forRootAsync(
  //     {
  //         useFactory: async (config: ConfigService) => {
  //             return {
  //                 connectionSettings:
  //                     config.eventStoreConfig.connectionSettings,
  //                 endpoint: config.eventStoreConfig.tcpEndpoint,
  //             };
  //         },
  //         inject: [ConfigService],
  //     },
  //     eventStoreBusConfig,
  // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
