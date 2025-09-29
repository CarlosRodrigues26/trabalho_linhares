
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Artista
 * 
 */
export type Artista = $Result.DefaultSelection<Prisma.$ArtistaPayload>
/**
 * Model CasaDeShow
 * 
 */
export type CasaDeShow = $Result.DefaultSelection<Prisma.$CasaDeShowPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Artistas
 * const artistas = await prisma.artista.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Artistas
   * const artistas = await prisma.artista.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.artista`: Exposes CRUD operations for the **Artista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artistas
    * const artistas = await prisma.artista.findMany()
    * ```
    */
  get artista(): Prisma.ArtistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.casaDeShow`: Exposes CRUD operations for the **CasaDeShow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasaDeShows
    * const casaDeShows = await prisma.casaDeShow.findMany()
    * ```
    */
  get casaDeShow(): Prisma.CasaDeShowDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Artista: 'Artista',
    CasaDeShow: 'CasaDeShow'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "artista" | "casaDeShow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Artista: {
        payload: Prisma.$ArtistaPayload<ExtArgs>
        fields: Prisma.ArtistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          findFirst: {
            args: Prisma.ArtistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          findMany: {
            args: Prisma.ArtistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>[]
          }
          create: {
            args: Prisma.ArtistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          createMany: {
            args: Prisma.ArtistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>[]
          }
          delete: {
            args: Prisma.ArtistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          update: {
            args: Prisma.ArtistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          deleteMany: {
            args: Prisma.ArtistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>[]
          }
          upsert: {
            args: Prisma.ArtistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          aggregate: {
            args: Prisma.ArtistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtista>
          }
          groupBy: {
            args: Prisma.ArtistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistaCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistaCountAggregateOutputType> | number
          }
        }
      }
      CasaDeShow: {
        payload: Prisma.$CasaDeShowPayload<ExtArgs>
        fields: Prisma.CasaDeShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasaDeShowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasaDeShowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          findFirst: {
            args: Prisma.CasaDeShowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasaDeShowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          findMany: {
            args: Prisma.CasaDeShowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>[]
          }
          create: {
            args: Prisma.CasaDeShowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          createMany: {
            args: Prisma.CasaDeShowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasaDeShowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>[]
          }
          delete: {
            args: Prisma.CasaDeShowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          update: {
            args: Prisma.CasaDeShowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          deleteMany: {
            args: Prisma.CasaDeShowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasaDeShowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasaDeShowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>[]
          }
          upsert: {
            args: Prisma.CasaDeShowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          aggregate: {
            args: Prisma.CasaDeShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasaDeShow>
          }
          groupBy: {
            args: Prisma.CasaDeShowGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasaDeShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasaDeShowCountArgs<ExtArgs>
            result: $Utils.Optional<CasaDeShowCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    artista?: ArtistaOmit
    casaDeShow?: CasaDeShowOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Artista
   */

  export type AggregateArtista = {
    _count: ArtistaCountAggregateOutputType | null
    _avg: ArtistaAvgAggregateOutputType | null
    _sum: ArtistaSumAggregateOutputType | null
    _min: ArtistaMinAggregateOutputType | null
    _max: ArtistaMaxAggregateOutputType | null
  }

  export type ArtistaAvgAggregateOutputType = {
    cacheMedio: number | null
  }

  export type ArtistaSumAggregateOutputType = {
    cacheMedio: number | null
  }

  export type ArtistaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    genero: string | null
    nacionalidade: string | null
    dataNascimento: Date | null
    biografia: string | null
    cacheMedio: number | null
  }

  export type ArtistaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    genero: string | null
    nacionalidade: string | null
    dataNascimento: Date | null
    biografia: string | null
    cacheMedio: number | null
  }

  export type ArtistaCountAggregateOutputType = {
    id: number
    nome: number
    genero: number
    nacionalidade: number
    dataNascimento: number
    biografia: number
    cacheMedio: number
    _all: number
  }


  export type ArtistaAvgAggregateInputType = {
    cacheMedio?: true
  }

  export type ArtistaSumAggregateInputType = {
    cacheMedio?: true
  }

  export type ArtistaMinAggregateInputType = {
    id?: true
    nome?: true
    genero?: true
    nacionalidade?: true
    dataNascimento?: true
    biografia?: true
    cacheMedio?: true
  }

  export type ArtistaMaxAggregateInputType = {
    id?: true
    nome?: true
    genero?: true
    nacionalidade?: true
    dataNascimento?: true
    biografia?: true
    cacheMedio?: true
  }

  export type ArtistaCountAggregateInputType = {
    id?: true
    nome?: true
    genero?: true
    nacionalidade?: true
    dataNascimento?: true
    biografia?: true
    cacheMedio?: true
    _all?: true
  }

  export type ArtistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artista to aggregate.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artistas
    **/
    _count?: true | ArtistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistaMaxAggregateInputType
  }

  export type GetArtistaAggregateType<T extends ArtistaAggregateArgs> = {
        [P in keyof T & keyof AggregateArtista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtista[P]>
      : GetScalarType<T[P], AggregateArtista[P]>
  }




  export type ArtistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistaWhereInput
    orderBy?: ArtistaOrderByWithAggregationInput | ArtistaOrderByWithAggregationInput[]
    by: ArtistaScalarFieldEnum[] | ArtistaScalarFieldEnum
    having?: ArtistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistaCountAggregateInputType | true
    _avg?: ArtistaAvgAggregateInputType
    _sum?: ArtistaSumAggregateInputType
    _min?: ArtistaMinAggregateInputType
    _max?: ArtistaMaxAggregateInputType
  }

  export type ArtistaGroupByOutputType = {
    id: string
    nome: string
    genero: string | null
    nacionalidade: string | null
    dataNascimento: Date | null
    biografia: string | null
    cacheMedio: number | null
    _count: ArtistaCountAggregateOutputType | null
    _avg: ArtistaAvgAggregateOutputType | null
    _sum: ArtistaSumAggregateOutputType | null
    _min: ArtistaMinAggregateOutputType | null
    _max: ArtistaMaxAggregateOutputType | null
  }

  type GetArtistaGroupByPayload<T extends ArtistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistaGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistaGroupByOutputType[P]>
        }
      >
    >


  export type ArtistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    genero?: boolean
    nacionalidade?: boolean
    dataNascimento?: boolean
    biografia?: boolean
    cacheMedio?: boolean
  }, ExtArgs["result"]["artista"]>

  export type ArtistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    genero?: boolean
    nacionalidade?: boolean
    dataNascimento?: boolean
    biografia?: boolean
    cacheMedio?: boolean
  }, ExtArgs["result"]["artista"]>

  export type ArtistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    genero?: boolean
    nacionalidade?: boolean
    dataNascimento?: boolean
    biografia?: boolean
    cacheMedio?: boolean
  }, ExtArgs["result"]["artista"]>

  export type ArtistaSelectScalar = {
    id?: boolean
    nome?: boolean
    genero?: boolean
    nacionalidade?: boolean
    dataNascimento?: boolean
    biografia?: boolean
    cacheMedio?: boolean
  }

  export type ArtistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "genero" | "nacionalidade" | "dataNascimento" | "biografia" | "cacheMedio", ExtArgs["result"]["artista"]>

  export type $ArtistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artista"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      genero: string | null
      nacionalidade: string | null
      dataNascimento: Date | null
      biografia: string | null
      cacheMedio: number | null
    }, ExtArgs["result"]["artista"]>
    composites: {}
  }

  type ArtistaGetPayload<S extends boolean | null | undefined | ArtistaDefaultArgs> = $Result.GetResult<Prisma.$ArtistaPayload, S>

  type ArtistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistaCountAggregateInputType | true
    }

  export interface ArtistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artista'], meta: { name: 'Artista' } }
    /**
     * Find zero or one Artista that matches the filter.
     * @param {ArtistaFindUniqueArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistaFindUniqueArgs>(args: SelectSubset<T, ArtistaFindUniqueArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistaFindUniqueOrThrowArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaFindFirstArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistaFindFirstArgs>(args?: SelectSubset<T, ArtistaFindFirstArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaFindFirstOrThrowArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artistas
     * const artistas = await prisma.artista.findMany()
     * 
     * // Get first 10 Artistas
     * const artistas = await prisma.artista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistaWithIdOnly = await prisma.artista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistaFindManyArgs>(args?: SelectSubset<T, ArtistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artista.
     * @param {ArtistaCreateArgs} args - Arguments to create a Artista.
     * @example
     * // Create one Artista
     * const Artista = await prisma.artista.create({
     *   data: {
     *     // ... data to create a Artista
     *   }
     * })
     * 
     */
    create<T extends ArtistaCreateArgs>(args: SelectSubset<T, ArtistaCreateArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artistas.
     * @param {ArtistaCreateManyArgs} args - Arguments to create many Artistas.
     * @example
     * // Create many Artistas
     * const artista = await prisma.artista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistaCreateManyArgs>(args?: SelectSubset<T, ArtistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artistas and returns the data saved in the database.
     * @param {ArtistaCreateManyAndReturnArgs} args - Arguments to create many Artistas.
     * @example
     * // Create many Artistas
     * const artista = await prisma.artista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artistas and only return the `id`
     * const artistaWithIdOnly = await prisma.artista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artista.
     * @param {ArtistaDeleteArgs} args - Arguments to delete one Artista.
     * @example
     * // Delete one Artista
     * const Artista = await prisma.artista.delete({
     *   where: {
     *     // ... filter to delete one Artista
     *   }
     * })
     * 
     */
    delete<T extends ArtistaDeleteArgs>(args: SelectSubset<T, ArtistaDeleteArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artista.
     * @param {ArtistaUpdateArgs} args - Arguments to update one Artista.
     * @example
     * // Update one Artista
     * const artista = await prisma.artista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistaUpdateArgs>(args: SelectSubset<T, ArtistaUpdateArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artistas.
     * @param {ArtistaDeleteManyArgs} args - Arguments to filter Artistas to delete.
     * @example
     * // Delete a few Artistas
     * const { count } = await prisma.artista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistaDeleteManyArgs>(args?: SelectSubset<T, ArtistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artistas
     * const artista = await prisma.artista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistaUpdateManyArgs>(args: SelectSubset<T, ArtistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artistas and returns the data updated in the database.
     * @param {ArtistaUpdateManyAndReturnArgs} args - Arguments to update many Artistas.
     * @example
     * // Update many Artistas
     * const artista = await prisma.artista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artistas and only return the `id`
     * const artistaWithIdOnly = await prisma.artista.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artista.
     * @param {ArtistaUpsertArgs} args - Arguments to update or create a Artista.
     * @example
     * // Update or create a Artista
     * const artista = await prisma.artista.upsert({
     *   create: {
     *     // ... data to create a Artista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artista we want to update
     *   }
     * })
     */
    upsert<T extends ArtistaUpsertArgs>(args: SelectSubset<T, ArtistaUpsertArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaCountArgs} args - Arguments to filter Artistas to count.
     * @example
     * // Count the number of Artistas
     * const count = await prisma.artista.count({
     *   where: {
     *     // ... the filter for the Artistas we want to count
     *   }
     * })
    **/
    count<T extends ArtistaCountArgs>(
      args?: Subset<T, ArtistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistaAggregateArgs>(args: Subset<T, ArtistaAggregateArgs>): Prisma.PrismaPromise<GetArtistaAggregateType<T>>

    /**
     * Group by Artista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistaGroupByArgs['orderBy'] }
        : { orderBy?: ArtistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artista model
   */
  readonly fields: ArtistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artista model
   */
  interface ArtistaFieldRefs {
    readonly id: FieldRef<"Artista", 'String'>
    readonly nome: FieldRef<"Artista", 'String'>
    readonly genero: FieldRef<"Artista", 'String'>
    readonly nacionalidade: FieldRef<"Artista", 'String'>
    readonly dataNascimento: FieldRef<"Artista", 'DateTime'>
    readonly biografia: FieldRef<"Artista", 'String'>
    readonly cacheMedio: FieldRef<"Artista", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Artista findUnique
   */
  export type ArtistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista findUniqueOrThrow
   */
  export type ArtistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista findFirst
   */
  export type ArtistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artistas.
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artistas.
     */
    distinct?: ArtistaScalarFieldEnum | ArtistaScalarFieldEnum[]
  }

  /**
   * Artista findFirstOrThrow
   */
  export type ArtistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artistas.
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artistas.
     */
    distinct?: ArtistaScalarFieldEnum | ArtistaScalarFieldEnum[]
  }

  /**
   * Artista findMany
   */
  export type ArtistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Filter, which Artistas to fetch.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artistas.
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    distinct?: ArtistaScalarFieldEnum | ArtistaScalarFieldEnum[]
  }

  /**
   * Artista create
   */
  export type ArtistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * The data needed to create a Artista.
     */
    data: XOR<ArtistaCreateInput, ArtistaUncheckedCreateInput>
  }

  /**
   * Artista createMany
   */
  export type ArtistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artistas.
     */
    data: ArtistaCreateManyInput | ArtistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artista createManyAndReturn
   */
  export type ArtistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * The data used to create many Artistas.
     */
    data: ArtistaCreateManyInput | ArtistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artista update
   */
  export type ArtistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * The data needed to update a Artista.
     */
    data: XOR<ArtistaUpdateInput, ArtistaUncheckedUpdateInput>
    /**
     * Choose, which Artista to update.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista updateMany
   */
  export type ArtistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artistas.
     */
    data: XOR<ArtistaUpdateManyMutationInput, ArtistaUncheckedUpdateManyInput>
    /**
     * Filter which Artistas to update
     */
    where?: ArtistaWhereInput
    /**
     * Limit how many Artistas to update.
     */
    limit?: number
  }

  /**
   * Artista updateManyAndReturn
   */
  export type ArtistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * The data used to update Artistas.
     */
    data: XOR<ArtistaUpdateManyMutationInput, ArtistaUncheckedUpdateManyInput>
    /**
     * Filter which Artistas to update
     */
    where?: ArtistaWhereInput
    /**
     * Limit how many Artistas to update.
     */
    limit?: number
  }

  /**
   * Artista upsert
   */
  export type ArtistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * The filter to search for the Artista to update in case it exists.
     */
    where: ArtistaWhereUniqueInput
    /**
     * In case the Artista found by the `where` argument doesn't exist, create a new Artista with this data.
     */
    create: XOR<ArtistaCreateInput, ArtistaUncheckedCreateInput>
    /**
     * In case the Artista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistaUpdateInput, ArtistaUncheckedUpdateInput>
  }

  /**
   * Artista delete
   */
  export type ArtistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Filter which Artista to delete.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista deleteMany
   */
  export type ArtistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artistas to delete
     */
    where?: ArtistaWhereInput
    /**
     * Limit how many Artistas to delete.
     */
    limit?: number
  }

  /**
   * Artista without action
   */
  export type ArtistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
  }


  /**
   * Model CasaDeShow
   */

  export type AggregateCasaDeShow = {
    _count: CasaDeShowCountAggregateOutputType | null
    _avg: CasaDeShowAvgAggregateOutputType | null
    _sum: CasaDeShowSumAggregateOutputType | null
    _min: CasaDeShowMinAggregateOutputType | null
    _max: CasaDeShowMaxAggregateOutputType | null
  }

  export type CasaDeShowAvgAggregateOutputType = {
    capacidade: number | null
  }

  export type CasaDeShowSumAggregateOutputType = {
    capacidade: number | null
  }

  export type CasaDeShowMinAggregateOutputType = {
    id: string | null
    nome: string | null
    endereco: string | null
    capacidade: number | null
    cidade: string | null
    telefone: string | null
    site: string | null
  }

  export type CasaDeShowMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    endereco: string | null
    capacidade: number | null
    cidade: string | null
    telefone: string | null
    site: string | null
  }

  export type CasaDeShowCountAggregateOutputType = {
    id: number
    nome: number
    endereco: number
    capacidade: number
    cidade: number
    telefone: number
    site: number
    _all: number
  }


  export type CasaDeShowAvgAggregateInputType = {
    capacidade?: true
  }

  export type CasaDeShowSumAggregateInputType = {
    capacidade?: true
  }

  export type CasaDeShowMinAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    capacidade?: true
    cidade?: true
    telefone?: true
    site?: true
  }

  export type CasaDeShowMaxAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    capacidade?: true
    cidade?: true
    telefone?: true
    site?: true
  }

  export type CasaDeShowCountAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    capacidade?: true
    cidade?: true
    telefone?: true
    site?: true
    _all?: true
  }

  export type CasaDeShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasaDeShow to aggregate.
     */
    where?: CasaDeShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasaDeShows to fetch.
     */
    orderBy?: CasaDeShowOrderByWithRelationInput | CasaDeShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasaDeShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasaDeShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasaDeShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasaDeShows
    **/
    _count?: true | CasaDeShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasaDeShowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasaDeShowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasaDeShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasaDeShowMaxAggregateInputType
  }

  export type GetCasaDeShowAggregateType<T extends CasaDeShowAggregateArgs> = {
        [P in keyof T & keyof AggregateCasaDeShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasaDeShow[P]>
      : GetScalarType<T[P], AggregateCasaDeShow[P]>
  }




  export type CasaDeShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasaDeShowWhereInput
    orderBy?: CasaDeShowOrderByWithAggregationInput | CasaDeShowOrderByWithAggregationInput[]
    by: CasaDeShowScalarFieldEnum[] | CasaDeShowScalarFieldEnum
    having?: CasaDeShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasaDeShowCountAggregateInputType | true
    _avg?: CasaDeShowAvgAggregateInputType
    _sum?: CasaDeShowSumAggregateInputType
    _min?: CasaDeShowMinAggregateInputType
    _max?: CasaDeShowMaxAggregateInputType
  }

  export type CasaDeShowGroupByOutputType = {
    id: string
    nome: string
    endereco: string
    capacidade: number
    cidade: string
    telefone: string | null
    site: string | null
    _count: CasaDeShowCountAggregateOutputType | null
    _avg: CasaDeShowAvgAggregateOutputType | null
    _sum: CasaDeShowSumAggregateOutputType | null
    _min: CasaDeShowMinAggregateOutputType | null
    _max: CasaDeShowMaxAggregateOutputType | null
  }

  type GetCasaDeShowGroupByPayload<T extends CasaDeShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasaDeShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasaDeShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasaDeShowGroupByOutputType[P]>
            : GetScalarType<T[P], CasaDeShowGroupByOutputType[P]>
        }
      >
    >


  export type CasaDeShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    capacidade?: boolean
    cidade?: boolean
    telefone?: boolean
    site?: boolean
  }, ExtArgs["result"]["casaDeShow"]>

  export type CasaDeShowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    capacidade?: boolean
    cidade?: boolean
    telefone?: boolean
    site?: boolean
  }, ExtArgs["result"]["casaDeShow"]>

  export type CasaDeShowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    capacidade?: boolean
    cidade?: boolean
    telefone?: boolean
    site?: boolean
  }, ExtArgs["result"]["casaDeShow"]>

  export type CasaDeShowSelectScalar = {
    id?: boolean
    nome?: boolean
    endereco?: boolean
    capacidade?: boolean
    cidade?: boolean
    telefone?: boolean
    site?: boolean
  }

  export type CasaDeShowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "endereco" | "capacidade" | "cidade" | "telefone" | "site", ExtArgs["result"]["casaDeShow"]>

  export type $CasaDeShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasaDeShow"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      endereco: string
      capacidade: number
      cidade: string
      telefone: string | null
      site: string | null
    }, ExtArgs["result"]["casaDeShow"]>
    composites: {}
  }

  type CasaDeShowGetPayload<S extends boolean | null | undefined | CasaDeShowDefaultArgs> = $Result.GetResult<Prisma.$CasaDeShowPayload, S>

  type CasaDeShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasaDeShowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasaDeShowCountAggregateInputType | true
    }

  export interface CasaDeShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasaDeShow'], meta: { name: 'CasaDeShow' } }
    /**
     * Find zero or one CasaDeShow that matches the filter.
     * @param {CasaDeShowFindUniqueArgs} args - Arguments to find a CasaDeShow
     * @example
     * // Get one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasaDeShowFindUniqueArgs>(args: SelectSubset<T, CasaDeShowFindUniqueArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CasaDeShow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasaDeShowFindUniqueOrThrowArgs} args - Arguments to find a CasaDeShow
     * @example
     * // Get one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasaDeShowFindUniqueOrThrowArgs>(args: SelectSubset<T, CasaDeShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CasaDeShow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowFindFirstArgs} args - Arguments to find a CasaDeShow
     * @example
     * // Get one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasaDeShowFindFirstArgs>(args?: SelectSubset<T, CasaDeShowFindFirstArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CasaDeShow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowFindFirstOrThrowArgs} args - Arguments to find a CasaDeShow
     * @example
     * // Get one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasaDeShowFindFirstOrThrowArgs>(args?: SelectSubset<T, CasaDeShowFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CasaDeShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasaDeShows
     * const casaDeShows = await prisma.casaDeShow.findMany()
     * 
     * // Get first 10 CasaDeShows
     * const casaDeShows = await prisma.casaDeShow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casaDeShowWithIdOnly = await prisma.casaDeShow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasaDeShowFindManyArgs>(args?: SelectSubset<T, CasaDeShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CasaDeShow.
     * @param {CasaDeShowCreateArgs} args - Arguments to create a CasaDeShow.
     * @example
     * // Create one CasaDeShow
     * const CasaDeShow = await prisma.casaDeShow.create({
     *   data: {
     *     // ... data to create a CasaDeShow
     *   }
     * })
     * 
     */
    create<T extends CasaDeShowCreateArgs>(args: SelectSubset<T, CasaDeShowCreateArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CasaDeShows.
     * @param {CasaDeShowCreateManyArgs} args - Arguments to create many CasaDeShows.
     * @example
     * // Create many CasaDeShows
     * const casaDeShow = await prisma.casaDeShow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasaDeShowCreateManyArgs>(args?: SelectSubset<T, CasaDeShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasaDeShows and returns the data saved in the database.
     * @param {CasaDeShowCreateManyAndReturnArgs} args - Arguments to create many CasaDeShows.
     * @example
     * // Create many CasaDeShows
     * const casaDeShow = await prisma.casaDeShow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasaDeShows and only return the `id`
     * const casaDeShowWithIdOnly = await prisma.casaDeShow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasaDeShowCreateManyAndReturnArgs>(args?: SelectSubset<T, CasaDeShowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CasaDeShow.
     * @param {CasaDeShowDeleteArgs} args - Arguments to delete one CasaDeShow.
     * @example
     * // Delete one CasaDeShow
     * const CasaDeShow = await prisma.casaDeShow.delete({
     *   where: {
     *     // ... filter to delete one CasaDeShow
     *   }
     * })
     * 
     */
    delete<T extends CasaDeShowDeleteArgs>(args: SelectSubset<T, CasaDeShowDeleteArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CasaDeShow.
     * @param {CasaDeShowUpdateArgs} args - Arguments to update one CasaDeShow.
     * @example
     * // Update one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasaDeShowUpdateArgs>(args: SelectSubset<T, CasaDeShowUpdateArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CasaDeShows.
     * @param {CasaDeShowDeleteManyArgs} args - Arguments to filter CasaDeShows to delete.
     * @example
     * // Delete a few CasaDeShows
     * const { count } = await prisma.casaDeShow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasaDeShowDeleteManyArgs>(args?: SelectSubset<T, CasaDeShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasaDeShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasaDeShows
     * const casaDeShow = await prisma.casaDeShow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasaDeShowUpdateManyArgs>(args: SelectSubset<T, CasaDeShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasaDeShows and returns the data updated in the database.
     * @param {CasaDeShowUpdateManyAndReturnArgs} args - Arguments to update many CasaDeShows.
     * @example
     * // Update many CasaDeShows
     * const casaDeShow = await prisma.casaDeShow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CasaDeShows and only return the `id`
     * const casaDeShowWithIdOnly = await prisma.casaDeShow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CasaDeShowUpdateManyAndReturnArgs>(args: SelectSubset<T, CasaDeShowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CasaDeShow.
     * @param {CasaDeShowUpsertArgs} args - Arguments to update or create a CasaDeShow.
     * @example
     * // Update or create a CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.upsert({
     *   create: {
     *     // ... data to create a CasaDeShow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasaDeShow we want to update
     *   }
     * })
     */
    upsert<T extends CasaDeShowUpsertArgs>(args: SelectSubset<T, CasaDeShowUpsertArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CasaDeShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowCountArgs} args - Arguments to filter CasaDeShows to count.
     * @example
     * // Count the number of CasaDeShows
     * const count = await prisma.casaDeShow.count({
     *   where: {
     *     // ... the filter for the CasaDeShows we want to count
     *   }
     * })
    **/
    count<T extends CasaDeShowCountArgs>(
      args?: Subset<T, CasaDeShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasaDeShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasaDeShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CasaDeShowAggregateArgs>(args: Subset<T, CasaDeShowAggregateArgs>): Prisma.PrismaPromise<GetCasaDeShowAggregateType<T>>

    /**
     * Group by CasaDeShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CasaDeShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasaDeShowGroupByArgs['orderBy'] }
        : { orderBy?: CasaDeShowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CasaDeShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasaDeShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasaDeShow model
   */
  readonly fields: CasaDeShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasaDeShow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasaDeShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CasaDeShow model
   */
  interface CasaDeShowFieldRefs {
    readonly id: FieldRef<"CasaDeShow", 'String'>
    readonly nome: FieldRef<"CasaDeShow", 'String'>
    readonly endereco: FieldRef<"CasaDeShow", 'String'>
    readonly capacidade: FieldRef<"CasaDeShow", 'Int'>
    readonly cidade: FieldRef<"CasaDeShow", 'String'>
    readonly telefone: FieldRef<"CasaDeShow", 'String'>
    readonly site: FieldRef<"CasaDeShow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CasaDeShow findUnique
   */
  export type CasaDeShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShow to fetch.
     */
    where: CasaDeShowWhereUniqueInput
  }

  /**
   * CasaDeShow findUniqueOrThrow
   */
  export type CasaDeShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShow to fetch.
     */
    where: CasaDeShowWhereUniqueInput
  }

  /**
   * CasaDeShow findFirst
   */
  export type CasaDeShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShow to fetch.
     */
    where?: CasaDeShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasaDeShows to fetch.
     */
    orderBy?: CasaDeShowOrderByWithRelationInput | CasaDeShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasaDeShows.
     */
    cursor?: CasaDeShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasaDeShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasaDeShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasaDeShows.
     */
    distinct?: CasaDeShowScalarFieldEnum | CasaDeShowScalarFieldEnum[]
  }

  /**
   * CasaDeShow findFirstOrThrow
   */
  export type CasaDeShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShow to fetch.
     */
    where?: CasaDeShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasaDeShows to fetch.
     */
    orderBy?: CasaDeShowOrderByWithRelationInput | CasaDeShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasaDeShows.
     */
    cursor?: CasaDeShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasaDeShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasaDeShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasaDeShows.
     */
    distinct?: CasaDeShowScalarFieldEnum | CasaDeShowScalarFieldEnum[]
  }

  /**
   * CasaDeShow findMany
   */
  export type CasaDeShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShows to fetch.
     */
    where?: CasaDeShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasaDeShows to fetch.
     */
    orderBy?: CasaDeShowOrderByWithRelationInput | CasaDeShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasaDeShows.
     */
    cursor?: CasaDeShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasaDeShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasaDeShows.
     */
    skip?: number
    distinct?: CasaDeShowScalarFieldEnum | CasaDeShowScalarFieldEnum[]
  }

  /**
   * CasaDeShow create
   */
  export type CasaDeShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The data needed to create a CasaDeShow.
     */
    data: XOR<CasaDeShowCreateInput, CasaDeShowUncheckedCreateInput>
  }

  /**
   * CasaDeShow createMany
   */
  export type CasaDeShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasaDeShows.
     */
    data: CasaDeShowCreateManyInput | CasaDeShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasaDeShow createManyAndReturn
   */
  export type CasaDeShowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The data used to create many CasaDeShows.
     */
    data: CasaDeShowCreateManyInput | CasaDeShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasaDeShow update
   */
  export type CasaDeShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The data needed to update a CasaDeShow.
     */
    data: XOR<CasaDeShowUpdateInput, CasaDeShowUncheckedUpdateInput>
    /**
     * Choose, which CasaDeShow to update.
     */
    where: CasaDeShowWhereUniqueInput
  }

  /**
   * CasaDeShow updateMany
   */
  export type CasaDeShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasaDeShows.
     */
    data: XOR<CasaDeShowUpdateManyMutationInput, CasaDeShowUncheckedUpdateManyInput>
    /**
     * Filter which CasaDeShows to update
     */
    where?: CasaDeShowWhereInput
    /**
     * Limit how many CasaDeShows to update.
     */
    limit?: number
  }

  /**
   * CasaDeShow updateManyAndReturn
   */
  export type CasaDeShowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The data used to update CasaDeShows.
     */
    data: XOR<CasaDeShowUpdateManyMutationInput, CasaDeShowUncheckedUpdateManyInput>
    /**
     * Filter which CasaDeShows to update
     */
    where?: CasaDeShowWhereInput
    /**
     * Limit how many CasaDeShows to update.
     */
    limit?: number
  }

  /**
   * CasaDeShow upsert
   */
  export type CasaDeShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The filter to search for the CasaDeShow to update in case it exists.
     */
    where: CasaDeShowWhereUniqueInput
    /**
     * In case the CasaDeShow found by the `where` argument doesn't exist, create a new CasaDeShow with this data.
     */
    create: XOR<CasaDeShowCreateInput, CasaDeShowUncheckedCreateInput>
    /**
     * In case the CasaDeShow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasaDeShowUpdateInput, CasaDeShowUncheckedUpdateInput>
  }

  /**
   * CasaDeShow delete
   */
  export type CasaDeShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter which CasaDeShow to delete.
     */
    where: CasaDeShowWhereUniqueInput
  }

  /**
   * CasaDeShow deleteMany
   */
  export type CasaDeShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasaDeShows to delete
     */
    where?: CasaDeShowWhereInput
    /**
     * Limit how many CasaDeShows to delete.
     */
    limit?: number
  }

  /**
   * CasaDeShow without action
   */
  export type CasaDeShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArtistaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    genero: 'genero',
    nacionalidade: 'nacionalidade',
    dataNascimento: 'dataNascimento',
    biografia: 'biografia',
    cacheMedio: 'cacheMedio'
  };

  export type ArtistaScalarFieldEnum = (typeof ArtistaScalarFieldEnum)[keyof typeof ArtistaScalarFieldEnum]


  export const CasaDeShowScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    endereco: 'endereco',
    capacidade: 'capacidade',
    cidade: 'cidade',
    telefone: 'telefone',
    site: 'site'
  };

  export type CasaDeShowScalarFieldEnum = (typeof CasaDeShowScalarFieldEnum)[keyof typeof CasaDeShowScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ArtistaWhereInput = {
    AND?: ArtistaWhereInput | ArtistaWhereInput[]
    OR?: ArtistaWhereInput[]
    NOT?: ArtistaWhereInput | ArtistaWhereInput[]
    id?: StringFilter<"Artista"> | string
    nome?: StringFilter<"Artista"> | string
    genero?: StringNullableFilter<"Artista"> | string | null
    nacionalidade?: StringNullableFilter<"Artista"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Artista"> | Date | string | null
    biografia?: StringNullableFilter<"Artista"> | string | null
    cacheMedio?: FloatNullableFilter<"Artista"> | number | null
  }

  export type ArtistaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrderInput | SortOrder
    nacionalidade?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    biografia?: SortOrderInput | SortOrder
    cacheMedio?: SortOrderInput | SortOrder
  }

  export type ArtistaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistaWhereInput | ArtistaWhereInput[]
    OR?: ArtistaWhereInput[]
    NOT?: ArtistaWhereInput | ArtistaWhereInput[]
    nome?: StringFilter<"Artista"> | string
    genero?: StringNullableFilter<"Artista"> | string | null
    nacionalidade?: StringNullableFilter<"Artista"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Artista"> | Date | string | null
    biografia?: StringNullableFilter<"Artista"> | string | null
    cacheMedio?: FloatNullableFilter<"Artista"> | number | null
  }, "id">

  export type ArtistaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrderInput | SortOrder
    nacionalidade?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    biografia?: SortOrderInput | SortOrder
    cacheMedio?: SortOrderInput | SortOrder
    _count?: ArtistaCountOrderByAggregateInput
    _avg?: ArtistaAvgOrderByAggregateInput
    _max?: ArtistaMaxOrderByAggregateInput
    _min?: ArtistaMinOrderByAggregateInput
    _sum?: ArtistaSumOrderByAggregateInput
  }

  export type ArtistaScalarWhereWithAggregatesInput = {
    AND?: ArtistaScalarWhereWithAggregatesInput | ArtistaScalarWhereWithAggregatesInput[]
    OR?: ArtistaScalarWhereWithAggregatesInput[]
    NOT?: ArtistaScalarWhereWithAggregatesInput | ArtistaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artista"> | string
    nome?: StringWithAggregatesFilter<"Artista"> | string
    genero?: StringNullableWithAggregatesFilter<"Artista"> | string | null
    nacionalidade?: StringNullableWithAggregatesFilter<"Artista"> | string | null
    dataNascimento?: DateTimeNullableWithAggregatesFilter<"Artista"> | Date | string | null
    biografia?: StringNullableWithAggregatesFilter<"Artista"> | string | null
    cacheMedio?: FloatNullableWithAggregatesFilter<"Artista"> | number | null
  }

  export type CasaDeShowWhereInput = {
    AND?: CasaDeShowWhereInput | CasaDeShowWhereInput[]
    OR?: CasaDeShowWhereInput[]
    NOT?: CasaDeShowWhereInput | CasaDeShowWhereInput[]
    id?: StringFilter<"CasaDeShow"> | string
    nome?: StringFilter<"CasaDeShow"> | string
    endereco?: StringFilter<"CasaDeShow"> | string
    capacidade?: IntFilter<"CasaDeShow"> | number
    cidade?: StringFilter<"CasaDeShow"> | string
    telefone?: StringNullableFilter<"CasaDeShow"> | string | null
    site?: StringNullableFilter<"CasaDeShow"> | string | null
  }

  export type CasaDeShowOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    capacidade?: SortOrder
    cidade?: SortOrder
    telefone?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
  }

  export type CasaDeShowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CasaDeShowWhereInput | CasaDeShowWhereInput[]
    OR?: CasaDeShowWhereInput[]
    NOT?: CasaDeShowWhereInput | CasaDeShowWhereInput[]
    nome?: StringFilter<"CasaDeShow"> | string
    endereco?: StringFilter<"CasaDeShow"> | string
    capacidade?: IntFilter<"CasaDeShow"> | number
    cidade?: StringFilter<"CasaDeShow"> | string
    telefone?: StringNullableFilter<"CasaDeShow"> | string | null
    site?: StringNullableFilter<"CasaDeShow"> | string | null
  }, "id">

  export type CasaDeShowOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    capacidade?: SortOrder
    cidade?: SortOrder
    telefone?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    _count?: CasaDeShowCountOrderByAggregateInput
    _avg?: CasaDeShowAvgOrderByAggregateInput
    _max?: CasaDeShowMaxOrderByAggregateInput
    _min?: CasaDeShowMinOrderByAggregateInput
    _sum?: CasaDeShowSumOrderByAggregateInput
  }

  export type CasaDeShowScalarWhereWithAggregatesInput = {
    AND?: CasaDeShowScalarWhereWithAggregatesInput | CasaDeShowScalarWhereWithAggregatesInput[]
    OR?: CasaDeShowScalarWhereWithAggregatesInput[]
    NOT?: CasaDeShowScalarWhereWithAggregatesInput | CasaDeShowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CasaDeShow"> | string
    nome?: StringWithAggregatesFilter<"CasaDeShow"> | string
    endereco?: StringWithAggregatesFilter<"CasaDeShow"> | string
    capacidade?: IntWithAggregatesFilter<"CasaDeShow"> | number
    cidade?: StringWithAggregatesFilter<"CasaDeShow"> | string
    telefone?: StringNullableWithAggregatesFilter<"CasaDeShow"> | string | null
    site?: StringNullableWithAggregatesFilter<"CasaDeShow"> | string | null
  }

  export type ArtistaCreateInput = {
    id?: string
    nome: string
    genero?: string | null
    nacionalidade?: string | null
    dataNascimento?: Date | string | null
    biografia?: string | null
    cacheMedio?: number | null
  }

  export type ArtistaUncheckedCreateInput = {
    id?: string
    nome: string
    genero?: string | null
    nacionalidade?: string | null
    dataNascimento?: Date | string | null
    biografia?: string | null
    cacheMedio?: number | null
  }

  export type ArtistaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidade?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    cacheMedio?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ArtistaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidade?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    cacheMedio?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ArtistaCreateManyInput = {
    id?: string
    nome: string
    genero?: string | null
    nacionalidade?: string | null
    dataNascimento?: Date | string | null
    biografia?: string | null
    cacheMedio?: number | null
  }

  export type ArtistaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidade?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    cacheMedio?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ArtistaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidade?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    cacheMedio?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CasaDeShowCreateInput = {
    id?: string
    nome: string
    endereco: string
    capacidade: number
    cidade: string
    telefone?: string | null
    site?: string | null
  }

  export type CasaDeShowUncheckedCreateInput = {
    id?: string
    nome: string
    endereco: string
    capacidade: number
    cidade: string
    telefone?: string | null
    site?: string | null
  }

  export type CasaDeShowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasaDeShowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasaDeShowCreateManyInput = {
    id?: string
    nome: string
    endereco: string
    capacidade: number
    cidade: string
    telefone?: string | null
    site?: string | null
  }

  export type CasaDeShowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasaDeShowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArtistaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
    biografia?: SortOrder
    cacheMedio?: SortOrder
  }

  export type ArtistaAvgOrderByAggregateInput = {
    cacheMedio?: SortOrder
  }

  export type ArtistaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
    biografia?: SortOrder
    cacheMedio?: SortOrder
  }

  export type ArtistaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
    biografia?: SortOrder
    cacheMedio?: SortOrder
  }

  export type ArtistaSumOrderByAggregateInput = {
    cacheMedio?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CasaDeShowCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    capacidade?: SortOrder
    cidade?: SortOrder
    telefone?: SortOrder
    site?: SortOrder
  }

  export type CasaDeShowAvgOrderByAggregateInput = {
    capacidade?: SortOrder
  }

  export type CasaDeShowMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    capacidade?: SortOrder
    cidade?: SortOrder
    telefone?: SortOrder
    site?: SortOrder
  }

  export type CasaDeShowMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    capacidade?: SortOrder
    cidade?: SortOrder
    telefone?: SortOrder
    site?: SortOrder
  }

  export type CasaDeShowSumOrderByAggregateInput = {
    capacidade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}