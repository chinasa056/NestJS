import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI!),
    ItemsModule,                            
  ],
  controllers: [AppController],              
  providers: [AppService],                  
})
export class AppModule {}
