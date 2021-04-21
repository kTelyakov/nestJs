### NestJs 

- добавить модуль: nest g module ${  название модуля }
- создать класс: nest g class product/product.model ( product/product.model сюда покладет )

```
const app = await NestFactory.create(AppModule)
app.setGlovalPrefix('api') // Задать глобальный префикс для всего api
```

####  Контроллеры
- класс обернутый декоратором Controller
- добавить: nest g controller ${имя}
```
@Controller('product') // Будет доступен по /products
export class ProductController {
  constructor(private readonly appService: AppService) { }

  @Get('add/:id') // По гет запросу на /add/${id} будет срабатывать этот метод
  getHello(): string {
    return this.appService.getHello() // То что отсюда вернется улетит клиенту
  }
}

```

##### Декораторы аргументов
- @Req() - объект запроса
- @Res() - объект ответа
- @Params(key?: string) - строковый параметр запроса, например /add/:id
- @Body(key?: string) - тело запроса
- @Query(key?: string) - query параметры
- @Headers(name?: string) - заголовок запроса
- @Session() - сессия пользователя


```
@HttpCode(204)
@Headers('Cache-Control', 'none')
@Get('add/:id')
getHello(): string {}
```

