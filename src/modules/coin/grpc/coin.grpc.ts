import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CoinGrpcClient {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'coin', // Название вашего gRPC пакета, указанное в protobuf определении
      protoPath:'C:/Users/kspivak/Documents/AML-API/file.proto', // Путь до вашего protobuf файла
    },
  })
  private client: ClientGrpc;

  private grpcService: any;

  constructor() {}

  // Ваш gRPC метод на стороннем микросервисе
  addTask(data: any): Observable<any> {
    return this.grpcService.addTask(data);
  }

  // Важно вызывать этот метод внутри вашего модуля CoinModule, например, в методе onModuleInit
  // чтобы обеспечить инициализацию gRPC клиента перед его использованием.
  public async start(): Promise<void> {
    this.grpcService = this.client.getService<any>('CoinService');
  }
}