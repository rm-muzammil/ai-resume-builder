
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model ResumeVersion
 * 
 */
export type ResumeVersion = $Result.DefaultSelection<Prisma.$ResumeVersionPayload>
/**
 * Model AIGeneration
 * 
 */
export type AIGeneration = $Result.DefaultSelection<Prisma.$AIGenerationPayload>
/**
 * Model Export
 * 
 */
export type Export = $Result.DefaultSelection<Prisma.$ExportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ResumeStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type ResumeStatus = (typeof ResumeStatus)[keyof typeof ResumeStatus]


export const AIGenerationType: {
  SUMMARY: 'SUMMARY',
  EXPERIENCE_BULLET: 'EXPERIENCE_BULLET',
  COVER_LETTER: 'COVER_LETTER',
  SKILL_SUGGESTION: 'SKILL_SUGGESTION',
  JOB_MATCH: 'JOB_MATCH',
  ATS_FEEDBACK: 'ATS_FEEDBACK'
};

export type AIGenerationType = (typeof AIGenerationType)[keyof typeof AIGenerationType]


export const ExportFormat: {
  PDF: 'PDF',
  DOCX: 'DOCX'
};

export type ExportFormat = (typeof ExportFormat)[keyof typeof ExportFormat]


export const ExportStatus: {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ResumeStatus = $Enums.ResumeStatus

export const ResumeStatus: typeof $Enums.ResumeStatus

export type AIGenerationType = $Enums.AIGenerationType

export const AIGenerationType: typeof $Enums.AIGenerationType

export type ExportFormat = $Enums.ExportFormat

export const ExportFormat: typeof $Enums.ExportFormat

export type ExportStatus = $Enums.ExportStatus

export const ExportStatus: typeof $Enums.ExportStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resumeVersion`: Exposes CRUD operations for the **ResumeVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumeVersions
    * const resumeVersions = await prisma.resumeVersion.findMany()
    * ```
    */
  get resumeVersion(): Prisma.ResumeVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIGeneration`: Exposes CRUD operations for the **AIGeneration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIGenerations
    * const aIGenerations = await prisma.aIGeneration.findMany()
    * ```
    */
  get aIGeneration(): Prisma.AIGenerationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.export`: Exposes CRUD operations for the **Export** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exports
    * const exports = await prisma.export.findMany()
    * ```
    */
  get export(): Prisma.ExportDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Resume: 'Resume',
    ResumeVersion: 'ResumeVersion',
    AIGeneration: 'AIGeneration',
    Export: 'Export'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resume" | "resumeVersion" | "aIGeneration" | "export"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      ResumeVersion: {
        payload: Prisma.$ResumeVersionPayload<ExtArgs>
        fields: Prisma.ResumeVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          findFirst: {
            args: Prisma.ResumeVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          findMany: {
            args: Prisma.ResumeVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>[]
          }
          create: {
            args: Prisma.ResumeVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          createMany: {
            args: Prisma.ResumeVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>[]
          }
          delete: {
            args: Prisma.ResumeVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          update: {
            args: Prisma.ResumeVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          deleteMany: {
            args: Prisma.ResumeVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>[]
          }
          upsert: {
            args: Prisma.ResumeVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeVersionPayload>
          }
          aggregate: {
            args: Prisma.ResumeVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumeVersion>
          }
          groupBy: {
            args: Prisma.ResumeVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeVersionCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeVersionCountAggregateOutputType> | number
          }
        }
      }
      AIGeneration: {
        payload: Prisma.$AIGenerationPayload<ExtArgs>
        fields: Prisma.AIGenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIGenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIGenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload>
          }
          findFirst: {
            args: Prisma.AIGenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIGenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload>
          }
          findMany: {
            args: Prisma.AIGenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload>[]
          }
          create: {
            args: Prisma.AIGenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload>
          }
          createMany: {
            args: Prisma.AIGenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIGenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload>[]
          }
          delete: {
            args: Prisma.AIGenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload>
          }
          update: {
            args: Prisma.AIGenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload>
          }
          deleteMany: {
            args: Prisma.AIGenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIGenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIGenerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload>[]
          }
          upsert: {
            args: Prisma.AIGenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationPayload>
          }
          aggregate: {
            args: Prisma.AIGenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIGeneration>
          }
          groupBy: {
            args: Prisma.AIGenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIGenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIGenerationCountArgs<ExtArgs>
            result: $Utils.Optional<AIGenerationCountAggregateOutputType> | number
          }
        }
      }
      Export: {
        payload: Prisma.$ExportPayload<ExtArgs>
        fields: Prisma.ExportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload>
          }
          findFirst: {
            args: Prisma.ExportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload>
          }
          findMany: {
            args: Prisma.ExportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload>[]
          }
          create: {
            args: Prisma.ExportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload>
          }
          createMany: {
            args: Prisma.ExportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload>[]
          }
          delete: {
            args: Prisma.ExportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload>
          }
          update: {
            args: Prisma.ExportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload>
          }
          deleteMany: {
            args: Prisma.ExportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload>[]
          }
          upsert: {
            args: Prisma.ExportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportPayload>
          }
          aggregate: {
            args: Prisma.ExportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExport>
          }
          groupBy: {
            args: Prisma.ExportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExportCountArgs<ExtArgs>
            result: $Utils.Optional<ExportCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resume?: ResumeOmit
    resumeVersion?: ResumeVersionOmit
    aIGeneration?: AIGenerationOmit
    export?: ExportOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resumes: number
    aiGenerations: number
    exports: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | UserCountOutputTypeCountResumesArgs
    aiGenerations?: boolean | UserCountOutputTypeCountAiGenerationsArgs
    exports?: boolean | UserCountOutputTypeCountExportsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIGenerationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportWhereInput
  }


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    versions: number
    aiGenerations: number
    exports: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | ResumeCountOutputTypeCountVersionsArgs
    aiGenerations?: boolean | ResumeCountOutputTypeCountAiGenerationsArgs
    exports?: boolean | ResumeCountOutputTypeCountExportsArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeVersionWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountAiGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIGenerationWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountExportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    avatarUrl: string | null
    isVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    avatarUrl: string | null
    isVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    passwordHash: number
    role: number
    avatarUrl: number
    isVerified: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    avatarUrl?: true
    isVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    avatarUrl?: true
    isVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    avatarUrl?: true
    isVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatarUrl: string | null
    isVerified: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resumes?: boolean | User$resumesArgs<ExtArgs>
    aiGenerations?: boolean | User$aiGenerationsArgs<ExtArgs>
    exports?: boolean | User$exportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "passwordHash" | "role" | "avatarUrl" | "isVerified" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | User$resumesArgs<ExtArgs>
    aiGenerations?: boolean | User$aiGenerationsArgs<ExtArgs>
    exports?: boolean | User$exportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resumes: Prisma.$ResumePayload<ExtArgs>[]
      aiGenerations: Prisma.$AIGenerationPayload<ExtArgs>[]
      exports: Prisma.$ExportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      avatarUrl: string | null
      isVerified: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resumes<T extends User$resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiGenerations<T extends User$aiGenerationsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiGenerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exports<T extends User$exportsArgs<ExtArgs> = {}>(args?: Subset<T, User$exportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resumes
   */
  export type User$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * User.aiGenerations
   */
  export type User$aiGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    where?: AIGenerationWhereInput
    orderBy?: AIGenerationOrderByWithRelationInput | AIGenerationOrderByWithRelationInput[]
    cursor?: AIGenerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIGenerationScalarFieldEnum | AIGenerationScalarFieldEnum[]
  }

  /**
   * User.exports
   */
  export type User$exportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    where?: ExportWhereInput
    orderBy?: ExportOrderByWithRelationInput | ExportOrderByWithRelationInput[]
    cursor?: ExportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExportScalarFieldEnum | ExportScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    slug: string | null
    templateKey: string | null
    status: $Enums.ResumeStatus | null
    professionalSummary: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    slug: string | null
    templateKey: string | null
    status: $Enums.ResumeStatus | null
    professionalSummary: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    slug: number
    templateKey: number
    status: number
    personalInfo: number
    professionalSummary: number
    education: number
    experience: number
    skills: number
    projects: number
    certifications: number
    languages: number
    socialLinks: number
    themeSettings: number
    customSections: number
    isPrimary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    slug?: true
    templateKey?: true
    status?: true
    professionalSummary?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    slug?: true
    templateKey?: true
    status?: true
    professionalSummary?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    slug?: true
    templateKey?: true
    status?: true
    personalInfo?: true
    professionalSummary?: true
    education?: true
    experience?: true
    skills?: true
    projects?: true
    certifications?: true
    languages?: true
    socialLinks?: true
    themeSettings?: true
    customSections?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    userId: string
    title: string
    slug: string
    templateKey: string
    status: $Enums.ResumeStatus
    personalInfo: JsonValue
    professionalSummary: string | null
    education: JsonValue
    experience: JsonValue
    skills: JsonValue
    projects: JsonValue | null
    certifications: JsonValue | null
    languages: JsonValue | null
    socialLinks: JsonValue | null
    themeSettings: JsonValue | null
    customSections: JsonValue | null
    isPrimary: boolean
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    templateKey?: boolean
    status?: boolean
    personalInfo?: boolean
    professionalSummary?: boolean
    education?: boolean
    experience?: boolean
    skills?: boolean
    projects?: boolean
    certifications?: boolean
    languages?: boolean
    socialLinks?: boolean
    themeSettings?: boolean
    customSections?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Resume$versionsArgs<ExtArgs>
    aiGenerations?: boolean | Resume$aiGenerationsArgs<ExtArgs>
    exports?: boolean | Resume$exportsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    templateKey?: boolean
    status?: boolean
    personalInfo?: boolean
    professionalSummary?: boolean
    education?: boolean
    experience?: boolean
    skills?: boolean
    projects?: boolean
    certifications?: boolean
    languages?: boolean
    socialLinks?: boolean
    themeSettings?: boolean
    customSections?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    templateKey?: boolean
    status?: boolean
    personalInfo?: boolean
    professionalSummary?: boolean
    education?: boolean
    experience?: boolean
    skills?: boolean
    projects?: boolean
    certifications?: boolean
    languages?: boolean
    socialLinks?: boolean
    themeSettings?: boolean
    customSections?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    templateKey?: boolean
    status?: boolean
    personalInfo?: boolean
    professionalSummary?: boolean
    education?: boolean
    experience?: boolean
    skills?: boolean
    projects?: boolean
    certifications?: boolean
    languages?: boolean
    socialLinks?: boolean
    themeSettings?: boolean
    customSections?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "slug" | "templateKey" | "status" | "personalInfo" | "professionalSummary" | "education" | "experience" | "skills" | "projects" | "certifications" | "languages" | "socialLinks" | "themeSettings" | "customSections" | "isPrimary" | "createdAt" | "updatedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Resume$versionsArgs<ExtArgs>
    aiGenerations?: boolean | Resume$aiGenerationsArgs<ExtArgs>
    exports?: boolean | Resume$exportsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      versions: Prisma.$ResumeVersionPayload<ExtArgs>[]
      aiGenerations: Prisma.$AIGenerationPayload<ExtArgs>[]
      exports: Prisma.$ExportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      slug: string
      templateKey: string
      status: $Enums.ResumeStatus
      personalInfo: Prisma.JsonValue
      professionalSummary: string | null
      education: Prisma.JsonValue
      experience: Prisma.JsonValue
      skills: Prisma.JsonValue
      projects: Prisma.JsonValue | null
      certifications: Prisma.JsonValue | null
      languages: Prisma.JsonValue | null
      socialLinks: Prisma.JsonValue | null
      themeSettings: Prisma.JsonValue | null
      customSections: Prisma.JsonValue | null
      isPrimary: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
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
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    versions<T extends Resume$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiGenerations<T extends Resume$aiGenerationsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$aiGenerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exports<T extends Resume$exportsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$exportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly title: FieldRef<"Resume", 'String'>
    readonly slug: FieldRef<"Resume", 'String'>
    readonly templateKey: FieldRef<"Resume", 'String'>
    readonly status: FieldRef<"Resume", 'ResumeStatus'>
    readonly personalInfo: FieldRef<"Resume", 'Json'>
    readonly professionalSummary: FieldRef<"Resume", 'String'>
    readonly education: FieldRef<"Resume", 'Json'>
    readonly experience: FieldRef<"Resume", 'Json'>
    readonly skills: FieldRef<"Resume", 'Json'>
    readonly projects: FieldRef<"Resume", 'Json'>
    readonly certifications: FieldRef<"Resume", 'Json'>
    readonly languages: FieldRef<"Resume", 'Json'>
    readonly socialLinks: FieldRef<"Resume", 'Json'>
    readonly themeSettings: FieldRef<"Resume", 'Json'>
    readonly customSections: FieldRef<"Resume", 'Json'>
    readonly isPrimary: FieldRef<"Resume", 'Boolean'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume.versions
   */
  export type Resume$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    where?: ResumeVersionWhereInput
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    cursor?: ResumeVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeVersionScalarFieldEnum | ResumeVersionScalarFieldEnum[]
  }

  /**
   * Resume.aiGenerations
   */
  export type Resume$aiGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    where?: AIGenerationWhereInput
    orderBy?: AIGenerationOrderByWithRelationInput | AIGenerationOrderByWithRelationInput[]
    cursor?: AIGenerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIGenerationScalarFieldEnum | AIGenerationScalarFieldEnum[]
  }

  /**
   * Resume.exports
   */
  export type Resume$exportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    where?: ExportWhereInput
    orderBy?: ExportOrderByWithRelationInput | ExportOrderByWithRelationInput[]
    cursor?: ExportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExportScalarFieldEnum | ExportScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model ResumeVersion
   */

  export type AggregateResumeVersion = {
    _count: ResumeVersionCountAggregateOutputType | null
    _avg: ResumeVersionAvgAggregateOutputType | null
    _sum: ResumeVersionSumAggregateOutputType | null
    _min: ResumeVersionMinAggregateOutputType | null
    _max: ResumeVersionMaxAggregateOutputType | null
  }

  export type ResumeVersionAvgAggregateOutputType = {
    versionNumber: number | null
  }

  export type ResumeVersionSumAggregateOutputType = {
    versionNumber: number | null
  }

  export type ResumeVersionMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    versionNumber: number | null
    changeNote: string | null
    createdAt: Date | null
  }

  export type ResumeVersionMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    versionNumber: number | null
    changeNote: string | null
    createdAt: Date | null
  }

  export type ResumeVersionCountAggregateOutputType = {
    id: number
    resumeId: number
    versionNumber: number
    snapshot: number
    changeNote: number
    createdAt: number
    _all: number
  }


  export type ResumeVersionAvgAggregateInputType = {
    versionNumber?: true
  }

  export type ResumeVersionSumAggregateInputType = {
    versionNumber?: true
  }

  export type ResumeVersionMinAggregateInputType = {
    id?: true
    resumeId?: true
    versionNumber?: true
    changeNote?: true
    createdAt?: true
  }

  export type ResumeVersionMaxAggregateInputType = {
    id?: true
    resumeId?: true
    versionNumber?: true
    changeNote?: true
    createdAt?: true
  }

  export type ResumeVersionCountAggregateInputType = {
    id?: true
    resumeId?: true
    versionNumber?: true
    snapshot?: true
    changeNote?: true
    createdAt?: true
    _all?: true
  }

  export type ResumeVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeVersion to aggregate.
     */
    where?: ResumeVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeVersions to fetch.
     */
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumeVersions
    **/
    _count?: true | ResumeVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeVersionMaxAggregateInputType
  }

  export type GetResumeVersionAggregateType<T extends ResumeVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateResumeVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumeVersion[P]>
      : GetScalarType<T[P], AggregateResumeVersion[P]>
  }




  export type ResumeVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeVersionWhereInput
    orderBy?: ResumeVersionOrderByWithAggregationInput | ResumeVersionOrderByWithAggregationInput[]
    by: ResumeVersionScalarFieldEnum[] | ResumeVersionScalarFieldEnum
    having?: ResumeVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeVersionCountAggregateInputType | true
    _avg?: ResumeVersionAvgAggregateInputType
    _sum?: ResumeVersionSumAggregateInputType
    _min?: ResumeVersionMinAggregateInputType
    _max?: ResumeVersionMaxAggregateInputType
  }

  export type ResumeVersionGroupByOutputType = {
    id: string
    resumeId: string
    versionNumber: number
    snapshot: JsonValue
    changeNote: string | null
    createdAt: Date
    _count: ResumeVersionCountAggregateOutputType | null
    _avg: ResumeVersionAvgAggregateOutputType | null
    _sum: ResumeVersionSumAggregateOutputType | null
    _min: ResumeVersionMinAggregateOutputType | null
    _max: ResumeVersionMaxAggregateOutputType | null
  }

  type GetResumeVersionGroupByPayload<T extends ResumeVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeVersionGroupByOutputType[P]>
        }
      >
    >


  export type ResumeVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    versionNumber?: boolean
    snapshot?: boolean
    changeNote?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeVersion"]>

  export type ResumeVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    versionNumber?: boolean
    snapshot?: boolean
    changeNote?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeVersion"]>

  export type ResumeVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    versionNumber?: boolean
    snapshot?: boolean
    changeNote?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeVersion"]>

  export type ResumeVersionSelectScalar = {
    id?: boolean
    resumeId?: boolean
    versionNumber?: boolean
    snapshot?: boolean
    changeNote?: boolean
    createdAt?: boolean
  }

  export type ResumeVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "versionNumber" | "snapshot" | "changeNote" | "createdAt", ExtArgs["result"]["resumeVersion"]>
  export type ResumeVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ResumeVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ResumeVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ResumeVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumeVersion"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      versionNumber: number
      snapshot: Prisma.JsonValue
      changeNote: string | null
      createdAt: Date
    }, ExtArgs["result"]["resumeVersion"]>
    composites: {}
  }

  type ResumeVersionGetPayload<S extends boolean | null | undefined | ResumeVersionDefaultArgs> = $Result.GetResult<Prisma.$ResumeVersionPayload, S>

  type ResumeVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeVersionCountAggregateInputType | true
    }

  export interface ResumeVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumeVersion'], meta: { name: 'ResumeVersion' } }
    /**
     * Find zero or one ResumeVersion that matches the filter.
     * @param {ResumeVersionFindUniqueArgs} args - Arguments to find a ResumeVersion
     * @example
     * // Get one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeVersionFindUniqueArgs>(args: SelectSubset<T, ResumeVersionFindUniqueArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResumeVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeVersionFindUniqueOrThrowArgs} args - Arguments to find a ResumeVersion
     * @example
     * // Get one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionFindFirstArgs} args - Arguments to find a ResumeVersion
     * @example
     * // Get one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeVersionFindFirstArgs>(args?: SelectSubset<T, ResumeVersionFindFirstArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionFindFirstOrThrowArgs} args - Arguments to find a ResumeVersion
     * @example
     * // Get one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResumeVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeVersions
     * const resumeVersions = await prisma.resumeVersion.findMany()
     * 
     * // Get first 10 ResumeVersions
     * const resumeVersions = await prisma.resumeVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeVersionWithIdOnly = await prisma.resumeVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeVersionFindManyArgs>(args?: SelectSubset<T, ResumeVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResumeVersion.
     * @param {ResumeVersionCreateArgs} args - Arguments to create a ResumeVersion.
     * @example
     * // Create one ResumeVersion
     * const ResumeVersion = await prisma.resumeVersion.create({
     *   data: {
     *     // ... data to create a ResumeVersion
     *   }
     * })
     * 
     */
    create<T extends ResumeVersionCreateArgs>(args: SelectSubset<T, ResumeVersionCreateArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResumeVersions.
     * @param {ResumeVersionCreateManyArgs} args - Arguments to create many ResumeVersions.
     * @example
     * // Create many ResumeVersions
     * const resumeVersion = await prisma.resumeVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeVersionCreateManyArgs>(args?: SelectSubset<T, ResumeVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResumeVersions and returns the data saved in the database.
     * @param {ResumeVersionCreateManyAndReturnArgs} args - Arguments to create many ResumeVersions.
     * @example
     * // Create many ResumeVersions
     * const resumeVersion = await prisma.resumeVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResumeVersions and only return the `id`
     * const resumeVersionWithIdOnly = await prisma.resumeVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResumeVersion.
     * @param {ResumeVersionDeleteArgs} args - Arguments to delete one ResumeVersion.
     * @example
     * // Delete one ResumeVersion
     * const ResumeVersion = await prisma.resumeVersion.delete({
     *   where: {
     *     // ... filter to delete one ResumeVersion
     *   }
     * })
     * 
     */
    delete<T extends ResumeVersionDeleteArgs>(args: SelectSubset<T, ResumeVersionDeleteArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResumeVersion.
     * @param {ResumeVersionUpdateArgs} args - Arguments to update one ResumeVersion.
     * @example
     * // Update one ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeVersionUpdateArgs>(args: SelectSubset<T, ResumeVersionUpdateArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResumeVersions.
     * @param {ResumeVersionDeleteManyArgs} args - Arguments to filter ResumeVersions to delete.
     * @example
     * // Delete a few ResumeVersions
     * const { count } = await prisma.resumeVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeVersionDeleteManyArgs>(args?: SelectSubset<T, ResumeVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeVersions
     * const resumeVersion = await prisma.resumeVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeVersionUpdateManyArgs>(args: SelectSubset<T, ResumeVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeVersions and returns the data updated in the database.
     * @param {ResumeVersionUpdateManyAndReturnArgs} args - Arguments to update many ResumeVersions.
     * @example
     * // Update many ResumeVersions
     * const resumeVersion = await prisma.resumeVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResumeVersions and only return the `id`
     * const resumeVersionWithIdOnly = await prisma.resumeVersion.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResumeVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResumeVersion.
     * @param {ResumeVersionUpsertArgs} args - Arguments to update or create a ResumeVersion.
     * @example
     * // Update or create a ResumeVersion
     * const resumeVersion = await prisma.resumeVersion.upsert({
     *   create: {
     *     // ... data to create a ResumeVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeVersion we want to update
     *   }
     * })
     */
    upsert<T extends ResumeVersionUpsertArgs>(args: SelectSubset<T, ResumeVersionUpsertArgs<ExtArgs>>): Prisma__ResumeVersionClient<$Result.GetResult<Prisma.$ResumeVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResumeVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionCountArgs} args - Arguments to filter ResumeVersions to count.
     * @example
     * // Count the number of ResumeVersions
     * const count = await prisma.resumeVersion.count({
     *   where: {
     *     // ... the filter for the ResumeVersions we want to count
     *   }
     * })
    **/
    count<T extends ResumeVersionCountArgs>(
      args?: Subset<T, ResumeVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumeVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeVersionAggregateArgs>(args: Subset<T, ResumeVersionAggregateArgs>): Prisma.PrismaPromise<GetResumeVersionAggregateType<T>>

    /**
     * Group by ResumeVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeVersionGroupByArgs} args - Group by arguments.
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
      T extends ResumeVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeVersionGroupByArgs['orderBy'] }
        : { orderBy?: ResumeVersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumeVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumeVersion model
   */
  readonly fields: ResumeVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumeVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResumeVersion model
   */
  interface ResumeVersionFieldRefs {
    readonly id: FieldRef<"ResumeVersion", 'String'>
    readonly resumeId: FieldRef<"ResumeVersion", 'String'>
    readonly versionNumber: FieldRef<"ResumeVersion", 'Int'>
    readonly snapshot: FieldRef<"ResumeVersion", 'Json'>
    readonly changeNote: FieldRef<"ResumeVersion", 'String'>
    readonly createdAt: FieldRef<"ResumeVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResumeVersion findUnique
   */
  export type ResumeVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersion to fetch.
     */
    where: ResumeVersionWhereUniqueInput
  }

  /**
   * ResumeVersion findUniqueOrThrow
   */
  export type ResumeVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersion to fetch.
     */
    where: ResumeVersionWhereUniqueInput
  }

  /**
   * ResumeVersion findFirst
   */
  export type ResumeVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersion to fetch.
     */
    where?: ResumeVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeVersions to fetch.
     */
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeVersions.
     */
    cursor?: ResumeVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeVersions.
     */
    distinct?: ResumeVersionScalarFieldEnum | ResumeVersionScalarFieldEnum[]
  }

  /**
   * ResumeVersion findFirstOrThrow
   */
  export type ResumeVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersion to fetch.
     */
    where?: ResumeVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeVersions to fetch.
     */
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeVersions.
     */
    cursor?: ResumeVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeVersions.
     */
    distinct?: ResumeVersionScalarFieldEnum | ResumeVersionScalarFieldEnum[]
  }

  /**
   * ResumeVersion findMany
   */
  export type ResumeVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeVersions to fetch.
     */
    where?: ResumeVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeVersions to fetch.
     */
    orderBy?: ResumeVersionOrderByWithRelationInput | ResumeVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumeVersions.
     */
    cursor?: ResumeVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeVersions.
     */
    distinct?: ResumeVersionScalarFieldEnum | ResumeVersionScalarFieldEnum[]
  }

  /**
   * ResumeVersion create
   */
  export type ResumeVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ResumeVersion.
     */
    data: XOR<ResumeVersionCreateInput, ResumeVersionUncheckedCreateInput>
  }

  /**
   * ResumeVersion createMany
   */
  export type ResumeVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeVersions.
     */
    data: ResumeVersionCreateManyInput | ResumeVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResumeVersion createManyAndReturn
   */
  export type ResumeVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * The data used to create many ResumeVersions.
     */
    data: ResumeVersionCreateManyInput | ResumeVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeVersion update
   */
  export type ResumeVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ResumeVersion.
     */
    data: XOR<ResumeVersionUpdateInput, ResumeVersionUncheckedUpdateInput>
    /**
     * Choose, which ResumeVersion to update.
     */
    where: ResumeVersionWhereUniqueInput
  }

  /**
   * ResumeVersion updateMany
   */
  export type ResumeVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeVersions.
     */
    data: XOR<ResumeVersionUpdateManyMutationInput, ResumeVersionUncheckedUpdateManyInput>
    /**
     * Filter which ResumeVersions to update
     */
    where?: ResumeVersionWhereInput
    /**
     * Limit how many ResumeVersions to update.
     */
    limit?: number
  }

  /**
   * ResumeVersion updateManyAndReturn
   */
  export type ResumeVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * The data used to update ResumeVersions.
     */
    data: XOR<ResumeVersionUpdateManyMutationInput, ResumeVersionUncheckedUpdateManyInput>
    /**
     * Filter which ResumeVersions to update
     */
    where?: ResumeVersionWhereInput
    /**
     * Limit how many ResumeVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeVersion upsert
   */
  export type ResumeVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ResumeVersion to update in case it exists.
     */
    where: ResumeVersionWhereUniqueInput
    /**
     * In case the ResumeVersion found by the `where` argument doesn't exist, create a new ResumeVersion with this data.
     */
    create: XOR<ResumeVersionCreateInput, ResumeVersionUncheckedCreateInput>
    /**
     * In case the ResumeVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeVersionUpdateInput, ResumeVersionUncheckedUpdateInput>
  }

  /**
   * ResumeVersion delete
   */
  export type ResumeVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
    /**
     * Filter which ResumeVersion to delete.
     */
    where: ResumeVersionWhereUniqueInput
  }

  /**
   * ResumeVersion deleteMany
   */
  export type ResumeVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeVersions to delete
     */
    where?: ResumeVersionWhereInput
    /**
     * Limit how many ResumeVersions to delete.
     */
    limit?: number
  }

  /**
   * ResumeVersion without action
   */
  export type ResumeVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeVersion
     */
    select?: ResumeVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeVersion
     */
    omit?: ResumeVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeVersionInclude<ExtArgs> | null
  }


  /**
   * Model AIGeneration
   */

  export type AggregateAIGeneration = {
    _count: AIGenerationCountAggregateOutputType | null
    _avg: AIGenerationAvgAggregateOutputType | null
    _sum: AIGenerationSumAggregateOutputType | null
    _min: AIGenerationMinAggregateOutputType | null
    _max: AIGenerationMaxAggregateOutputType | null
  }

  export type AIGenerationAvgAggregateOutputType = {
    tokensUsed: number | null
  }

  export type AIGenerationSumAggregateOutputType = {
    tokensUsed: number | null
  }

  export type AIGenerationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    resumeId: string | null
    generationType: $Enums.AIGenerationType | null
    inputPrompt: string | null
    outputText: string | null
    modelName: string | null
    tokensUsed: number | null
    isSavedToResume: boolean | null
    createdAt: Date | null
  }

  export type AIGenerationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    resumeId: string | null
    generationType: $Enums.AIGenerationType | null
    inputPrompt: string | null
    outputText: string | null
    modelName: string | null
    tokensUsed: number | null
    isSavedToResume: boolean | null
    createdAt: Date | null
  }

  export type AIGenerationCountAggregateOutputType = {
    id: number
    userId: number
    resumeId: number
    generationType: number
    inputPrompt: number
    inputContext: number
    outputText: number
    modelName: number
    tokensUsed: number
    isSavedToResume: number
    createdAt: number
    _all: number
  }


  export type AIGenerationAvgAggregateInputType = {
    tokensUsed?: true
  }

  export type AIGenerationSumAggregateInputType = {
    tokensUsed?: true
  }

  export type AIGenerationMinAggregateInputType = {
    id?: true
    userId?: true
    resumeId?: true
    generationType?: true
    inputPrompt?: true
    outputText?: true
    modelName?: true
    tokensUsed?: true
    isSavedToResume?: true
    createdAt?: true
  }

  export type AIGenerationMaxAggregateInputType = {
    id?: true
    userId?: true
    resumeId?: true
    generationType?: true
    inputPrompt?: true
    outputText?: true
    modelName?: true
    tokensUsed?: true
    isSavedToResume?: true
    createdAt?: true
  }

  export type AIGenerationCountAggregateInputType = {
    id?: true
    userId?: true
    resumeId?: true
    generationType?: true
    inputPrompt?: true
    inputContext?: true
    outputText?: true
    modelName?: true
    tokensUsed?: true
    isSavedToResume?: true
    createdAt?: true
    _all?: true
  }

  export type AIGenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIGeneration to aggregate.
     */
    where?: AIGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerations to fetch.
     */
    orderBy?: AIGenerationOrderByWithRelationInput | AIGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIGenerations
    **/
    _count?: true | AIGenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIGenerationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIGenerationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIGenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIGenerationMaxAggregateInputType
  }

  export type GetAIGenerationAggregateType<T extends AIGenerationAggregateArgs> = {
        [P in keyof T & keyof AggregateAIGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIGeneration[P]>
      : GetScalarType<T[P], AggregateAIGeneration[P]>
  }




  export type AIGenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIGenerationWhereInput
    orderBy?: AIGenerationOrderByWithAggregationInput | AIGenerationOrderByWithAggregationInput[]
    by: AIGenerationScalarFieldEnum[] | AIGenerationScalarFieldEnum
    having?: AIGenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIGenerationCountAggregateInputType | true
    _avg?: AIGenerationAvgAggregateInputType
    _sum?: AIGenerationSumAggregateInputType
    _min?: AIGenerationMinAggregateInputType
    _max?: AIGenerationMaxAggregateInputType
  }

  export type AIGenerationGroupByOutputType = {
    id: string
    userId: string
    resumeId: string | null
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext: JsonValue | null
    outputText: string
    modelName: string | null
    tokensUsed: number | null
    isSavedToResume: boolean
    createdAt: Date
    _count: AIGenerationCountAggregateOutputType | null
    _avg: AIGenerationAvgAggregateOutputType | null
    _sum: AIGenerationSumAggregateOutputType | null
    _min: AIGenerationMinAggregateOutputType | null
    _max: AIGenerationMaxAggregateOutputType | null
  }

  type GetAIGenerationGroupByPayload<T extends AIGenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIGenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIGenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIGenerationGroupByOutputType[P]>
            : GetScalarType<T[P], AIGenerationGroupByOutputType[P]>
        }
      >
    >


  export type AIGenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeId?: boolean
    generationType?: boolean
    inputPrompt?: boolean
    inputContext?: boolean
    outputText?: boolean
    modelName?: boolean
    tokensUsed?: boolean
    isSavedToResume?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | AIGeneration$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["aIGeneration"]>

  export type AIGenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeId?: boolean
    generationType?: boolean
    inputPrompt?: boolean
    inputContext?: boolean
    outputText?: boolean
    modelName?: boolean
    tokensUsed?: boolean
    isSavedToResume?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | AIGeneration$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["aIGeneration"]>

  export type AIGenerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeId?: boolean
    generationType?: boolean
    inputPrompt?: boolean
    inputContext?: boolean
    outputText?: boolean
    modelName?: boolean
    tokensUsed?: boolean
    isSavedToResume?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | AIGeneration$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["aIGeneration"]>

  export type AIGenerationSelectScalar = {
    id?: boolean
    userId?: boolean
    resumeId?: boolean
    generationType?: boolean
    inputPrompt?: boolean
    inputContext?: boolean
    outputText?: boolean
    modelName?: boolean
    tokensUsed?: boolean
    isSavedToResume?: boolean
    createdAt?: boolean
  }

  export type AIGenerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "resumeId" | "generationType" | "inputPrompt" | "inputContext" | "outputText" | "modelName" | "tokensUsed" | "isSavedToResume" | "createdAt", ExtArgs["result"]["aIGeneration"]>
  export type AIGenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | AIGeneration$resumeArgs<ExtArgs>
  }
  export type AIGenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | AIGeneration$resumeArgs<ExtArgs>
  }
  export type AIGenerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | AIGeneration$resumeArgs<ExtArgs>
  }

  export type $AIGenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIGeneration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      resumeId: string | null
      generationType: $Enums.AIGenerationType
      inputPrompt: string
      inputContext: Prisma.JsonValue | null
      outputText: string
      modelName: string | null
      tokensUsed: number | null
      isSavedToResume: boolean
      createdAt: Date
    }, ExtArgs["result"]["aIGeneration"]>
    composites: {}
  }

  type AIGenerationGetPayload<S extends boolean | null | undefined | AIGenerationDefaultArgs> = $Result.GetResult<Prisma.$AIGenerationPayload, S>

  type AIGenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIGenerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIGenerationCountAggregateInputType | true
    }

  export interface AIGenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIGeneration'], meta: { name: 'AIGeneration' } }
    /**
     * Find zero or one AIGeneration that matches the filter.
     * @param {AIGenerationFindUniqueArgs} args - Arguments to find a AIGeneration
     * @example
     * // Get one AIGeneration
     * const aIGeneration = await prisma.aIGeneration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIGenerationFindUniqueArgs>(args: SelectSubset<T, AIGenerationFindUniqueArgs<ExtArgs>>): Prisma__AIGenerationClient<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIGeneration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIGenerationFindUniqueOrThrowArgs} args - Arguments to find a AIGeneration
     * @example
     * // Get one AIGeneration
     * const aIGeneration = await prisma.aIGeneration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIGenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, AIGenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIGenerationClient<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIGeneration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationFindFirstArgs} args - Arguments to find a AIGeneration
     * @example
     * // Get one AIGeneration
     * const aIGeneration = await prisma.aIGeneration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIGenerationFindFirstArgs>(args?: SelectSubset<T, AIGenerationFindFirstArgs<ExtArgs>>): Prisma__AIGenerationClient<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIGeneration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationFindFirstOrThrowArgs} args - Arguments to find a AIGeneration
     * @example
     * // Get one AIGeneration
     * const aIGeneration = await prisma.aIGeneration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIGenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, AIGenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIGenerationClient<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIGenerations
     * const aIGenerations = await prisma.aIGeneration.findMany()
     * 
     * // Get first 10 AIGenerations
     * const aIGenerations = await prisma.aIGeneration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIGenerationWithIdOnly = await prisma.aIGeneration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIGenerationFindManyArgs>(args?: SelectSubset<T, AIGenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIGeneration.
     * @param {AIGenerationCreateArgs} args - Arguments to create a AIGeneration.
     * @example
     * // Create one AIGeneration
     * const AIGeneration = await prisma.aIGeneration.create({
     *   data: {
     *     // ... data to create a AIGeneration
     *   }
     * })
     * 
     */
    create<T extends AIGenerationCreateArgs>(args: SelectSubset<T, AIGenerationCreateArgs<ExtArgs>>): Prisma__AIGenerationClient<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIGenerations.
     * @param {AIGenerationCreateManyArgs} args - Arguments to create many AIGenerations.
     * @example
     * // Create many AIGenerations
     * const aIGeneration = await prisma.aIGeneration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIGenerationCreateManyArgs>(args?: SelectSubset<T, AIGenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIGenerations and returns the data saved in the database.
     * @param {AIGenerationCreateManyAndReturnArgs} args - Arguments to create many AIGenerations.
     * @example
     * // Create many AIGenerations
     * const aIGeneration = await prisma.aIGeneration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIGenerations and only return the `id`
     * const aIGenerationWithIdOnly = await prisma.aIGeneration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIGenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, AIGenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIGeneration.
     * @param {AIGenerationDeleteArgs} args - Arguments to delete one AIGeneration.
     * @example
     * // Delete one AIGeneration
     * const AIGeneration = await prisma.aIGeneration.delete({
     *   where: {
     *     // ... filter to delete one AIGeneration
     *   }
     * })
     * 
     */
    delete<T extends AIGenerationDeleteArgs>(args: SelectSubset<T, AIGenerationDeleteArgs<ExtArgs>>): Prisma__AIGenerationClient<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIGeneration.
     * @param {AIGenerationUpdateArgs} args - Arguments to update one AIGeneration.
     * @example
     * // Update one AIGeneration
     * const aIGeneration = await prisma.aIGeneration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIGenerationUpdateArgs>(args: SelectSubset<T, AIGenerationUpdateArgs<ExtArgs>>): Prisma__AIGenerationClient<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIGenerations.
     * @param {AIGenerationDeleteManyArgs} args - Arguments to filter AIGenerations to delete.
     * @example
     * // Delete a few AIGenerations
     * const { count } = await prisma.aIGeneration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIGenerationDeleteManyArgs>(args?: SelectSubset<T, AIGenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIGenerations
     * const aIGeneration = await prisma.aIGeneration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIGenerationUpdateManyArgs>(args: SelectSubset<T, AIGenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIGenerations and returns the data updated in the database.
     * @param {AIGenerationUpdateManyAndReturnArgs} args - Arguments to update many AIGenerations.
     * @example
     * // Update many AIGenerations
     * const aIGeneration = await prisma.aIGeneration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIGenerations and only return the `id`
     * const aIGenerationWithIdOnly = await prisma.aIGeneration.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIGenerationUpdateManyAndReturnArgs>(args: SelectSubset<T, AIGenerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIGeneration.
     * @param {AIGenerationUpsertArgs} args - Arguments to update or create a AIGeneration.
     * @example
     * // Update or create a AIGeneration
     * const aIGeneration = await prisma.aIGeneration.upsert({
     *   create: {
     *     // ... data to create a AIGeneration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIGeneration we want to update
     *   }
     * })
     */
    upsert<T extends AIGenerationUpsertArgs>(args: SelectSubset<T, AIGenerationUpsertArgs<ExtArgs>>): Prisma__AIGenerationClient<$Result.GetResult<Prisma.$AIGenerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationCountArgs} args - Arguments to filter AIGenerations to count.
     * @example
     * // Count the number of AIGenerations
     * const count = await prisma.aIGeneration.count({
     *   where: {
     *     // ... the filter for the AIGenerations we want to count
     *   }
     * })
    **/
    count<T extends AIGenerationCountArgs>(
      args?: Subset<T, AIGenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIGenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIGenerationAggregateArgs>(args: Subset<T, AIGenerationAggregateArgs>): Prisma.PrismaPromise<GetAIGenerationAggregateType<T>>

    /**
     * Group by AIGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationGroupByArgs} args - Group by arguments.
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
      T extends AIGenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIGenerationGroupByArgs['orderBy'] }
        : { orderBy?: AIGenerationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIGenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIGeneration model
   */
  readonly fields: AIGenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIGeneration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIGenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends AIGeneration$resumeArgs<ExtArgs> = {}>(args?: Subset<T, AIGeneration$resumeArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AIGeneration model
   */
  interface AIGenerationFieldRefs {
    readonly id: FieldRef<"AIGeneration", 'String'>
    readonly userId: FieldRef<"AIGeneration", 'String'>
    readonly resumeId: FieldRef<"AIGeneration", 'String'>
    readonly generationType: FieldRef<"AIGeneration", 'AIGenerationType'>
    readonly inputPrompt: FieldRef<"AIGeneration", 'String'>
    readonly inputContext: FieldRef<"AIGeneration", 'Json'>
    readonly outputText: FieldRef<"AIGeneration", 'String'>
    readonly modelName: FieldRef<"AIGeneration", 'String'>
    readonly tokensUsed: FieldRef<"AIGeneration", 'Int'>
    readonly isSavedToResume: FieldRef<"AIGeneration", 'Boolean'>
    readonly createdAt: FieldRef<"AIGeneration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIGeneration findUnique
   */
  export type AIGenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    /**
     * Filter, which AIGeneration to fetch.
     */
    where: AIGenerationWhereUniqueInput
  }

  /**
   * AIGeneration findUniqueOrThrow
   */
  export type AIGenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    /**
     * Filter, which AIGeneration to fetch.
     */
    where: AIGenerationWhereUniqueInput
  }

  /**
   * AIGeneration findFirst
   */
  export type AIGenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    /**
     * Filter, which AIGeneration to fetch.
     */
    where?: AIGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerations to fetch.
     */
    orderBy?: AIGenerationOrderByWithRelationInput | AIGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIGenerations.
     */
    cursor?: AIGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIGenerations.
     */
    distinct?: AIGenerationScalarFieldEnum | AIGenerationScalarFieldEnum[]
  }

  /**
   * AIGeneration findFirstOrThrow
   */
  export type AIGenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    /**
     * Filter, which AIGeneration to fetch.
     */
    where?: AIGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerations to fetch.
     */
    orderBy?: AIGenerationOrderByWithRelationInput | AIGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIGenerations.
     */
    cursor?: AIGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIGenerations.
     */
    distinct?: AIGenerationScalarFieldEnum | AIGenerationScalarFieldEnum[]
  }

  /**
   * AIGeneration findMany
   */
  export type AIGenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerations to fetch.
     */
    where?: AIGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerations to fetch.
     */
    orderBy?: AIGenerationOrderByWithRelationInput | AIGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIGenerations.
     */
    cursor?: AIGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIGenerations.
     */
    distinct?: AIGenerationScalarFieldEnum | AIGenerationScalarFieldEnum[]
  }

  /**
   * AIGeneration create
   */
  export type AIGenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a AIGeneration.
     */
    data: XOR<AIGenerationCreateInput, AIGenerationUncheckedCreateInput>
  }

  /**
   * AIGeneration createMany
   */
  export type AIGenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIGenerations.
     */
    data: AIGenerationCreateManyInput | AIGenerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIGeneration createManyAndReturn
   */
  export type AIGenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * The data used to create many AIGenerations.
     */
    data: AIGenerationCreateManyInput | AIGenerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIGeneration update
   */
  export type AIGenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a AIGeneration.
     */
    data: XOR<AIGenerationUpdateInput, AIGenerationUncheckedUpdateInput>
    /**
     * Choose, which AIGeneration to update.
     */
    where: AIGenerationWhereUniqueInput
  }

  /**
   * AIGeneration updateMany
   */
  export type AIGenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIGenerations.
     */
    data: XOR<AIGenerationUpdateManyMutationInput, AIGenerationUncheckedUpdateManyInput>
    /**
     * Filter which AIGenerations to update
     */
    where?: AIGenerationWhereInput
    /**
     * Limit how many AIGenerations to update.
     */
    limit?: number
  }

  /**
   * AIGeneration updateManyAndReturn
   */
  export type AIGenerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * The data used to update AIGenerations.
     */
    data: XOR<AIGenerationUpdateManyMutationInput, AIGenerationUncheckedUpdateManyInput>
    /**
     * Filter which AIGenerations to update
     */
    where?: AIGenerationWhereInput
    /**
     * Limit how many AIGenerations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIGeneration upsert
   */
  export type AIGenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the AIGeneration to update in case it exists.
     */
    where: AIGenerationWhereUniqueInput
    /**
     * In case the AIGeneration found by the `where` argument doesn't exist, create a new AIGeneration with this data.
     */
    create: XOR<AIGenerationCreateInput, AIGenerationUncheckedCreateInput>
    /**
     * In case the AIGeneration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIGenerationUpdateInput, AIGenerationUncheckedUpdateInput>
  }

  /**
   * AIGeneration delete
   */
  export type AIGenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
    /**
     * Filter which AIGeneration to delete.
     */
    where: AIGenerationWhereUniqueInput
  }

  /**
   * AIGeneration deleteMany
   */
  export type AIGenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIGenerations to delete
     */
    where?: AIGenerationWhereInput
    /**
     * Limit how many AIGenerations to delete.
     */
    limit?: number
  }

  /**
   * AIGeneration.resume
   */
  export type AIGeneration$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }

  /**
   * AIGeneration without action
   */
  export type AIGenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneration
     */
    select?: AIGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGeneration
     */
    omit?: AIGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationInclude<ExtArgs> | null
  }


  /**
   * Model Export
   */

  export type AggregateExport = {
    _count: ExportCountAggregateOutputType | null
    _min: ExportMinAggregateOutputType | null
    _max: ExportMaxAggregateOutputType | null
  }

  export type ExportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    resumeId: string | null
    format: $Enums.ExportFormat | null
    status: $Enums.ExportStatus | null
    fileUrl: string | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type ExportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    resumeId: string | null
    format: $Enums.ExportFormat | null
    status: $Enums.ExportStatus | null
    fileUrl: string | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type ExportCountAggregateOutputType = {
    id: number
    userId: number
    resumeId: number
    format: number
    status: number
    fileUrl: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type ExportMinAggregateInputType = {
    id?: true
    userId?: true
    resumeId?: true
    format?: true
    status?: true
    fileUrl?: true
    errorMessage?: true
    createdAt?: true
  }

  export type ExportMaxAggregateInputType = {
    id?: true
    userId?: true
    resumeId?: true
    format?: true
    status?: true
    fileUrl?: true
    errorMessage?: true
    createdAt?: true
  }

  export type ExportCountAggregateInputType = {
    id?: true
    userId?: true
    resumeId?: true
    format?: true
    status?: true
    fileUrl?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type ExportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Export to aggregate.
     */
    where?: ExportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exports to fetch.
     */
    orderBy?: ExportOrderByWithRelationInput | ExportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exports
    **/
    _count?: true | ExportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExportMaxAggregateInputType
  }

  export type GetExportAggregateType<T extends ExportAggregateArgs> = {
        [P in keyof T & keyof AggregateExport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExport[P]>
      : GetScalarType<T[P], AggregateExport[P]>
  }




  export type ExportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportWhereInput
    orderBy?: ExportOrderByWithAggregationInput | ExportOrderByWithAggregationInput[]
    by: ExportScalarFieldEnum[] | ExportScalarFieldEnum
    having?: ExportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExportCountAggregateInputType | true
    _min?: ExportMinAggregateInputType
    _max?: ExportMaxAggregateInputType
  }

  export type ExportGroupByOutputType = {
    id: string
    userId: string
    resumeId: string
    format: $Enums.ExportFormat
    status: $Enums.ExportStatus
    fileUrl: string | null
    errorMessage: string | null
    createdAt: Date
    _count: ExportCountAggregateOutputType | null
    _min: ExportMinAggregateOutputType | null
    _max: ExportMaxAggregateOutputType | null
  }

  type GetExportGroupByPayload<T extends ExportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExportGroupByOutputType[P]>
            : GetScalarType<T[P], ExportGroupByOutputType[P]>
        }
      >
    >


  export type ExportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeId?: boolean
    format?: boolean
    status?: boolean
    fileUrl?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["export"]>

  export type ExportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeId?: boolean
    format?: boolean
    status?: boolean
    fileUrl?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["export"]>

  export type ExportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeId?: boolean
    format?: boolean
    status?: boolean
    fileUrl?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["export"]>

  export type ExportSelectScalar = {
    id?: boolean
    userId?: boolean
    resumeId?: boolean
    format?: boolean
    status?: boolean
    fileUrl?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type ExportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "resumeId" | "format" | "status" | "fileUrl" | "errorMessage" | "createdAt", ExtArgs["result"]["export"]>
  export type ExportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ExportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ExportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ExportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Export"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      resumeId: string
      format: $Enums.ExportFormat
      status: $Enums.ExportStatus
      fileUrl: string | null
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["export"]>
    composites: {}
  }

  type ExportGetPayload<S extends boolean | null | undefined | ExportDefaultArgs> = $Result.GetResult<Prisma.$ExportPayload, S>

  type ExportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExportCountAggregateInputType | true
    }

  export interface ExportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Export'], meta: { name: 'Export' } }
    /**
     * Find zero or one Export that matches the filter.
     * @param {ExportFindUniqueArgs} args - Arguments to find a Export
     * @example
     * // Get one Export
     * const export = await prisma.export.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExportFindUniqueArgs>(args: SelectSubset<T, ExportFindUniqueArgs<ExtArgs>>): Prisma__ExportClient<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Export that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExportFindUniqueOrThrowArgs} args - Arguments to find a Export
     * @example
     * // Get one Export
     * const export = await prisma.export.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExportFindUniqueOrThrowArgs>(args: SelectSubset<T, ExportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExportClient<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Export that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportFindFirstArgs} args - Arguments to find a Export
     * @example
     * // Get one Export
     * const export = await prisma.export.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExportFindFirstArgs>(args?: SelectSubset<T, ExportFindFirstArgs<ExtArgs>>): Prisma__ExportClient<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Export that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportFindFirstOrThrowArgs} args - Arguments to find a Export
     * @example
     * // Get one Export
     * const export = await prisma.export.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExportFindFirstOrThrowArgs>(args?: SelectSubset<T, ExportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExportClient<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exports
     * const exports = await prisma.export.findMany()
     * 
     * // Get first 10 Exports
     * const exports = await prisma.export.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exportWithIdOnly = await prisma.export.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExportFindManyArgs>(args?: SelectSubset<T, ExportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Export.
     * @param {ExportCreateArgs} args - Arguments to create a Export.
     * @example
     * // Create one Export
     * const Export = await prisma.export.create({
     *   data: {
     *     // ... data to create a Export
     *   }
     * })
     * 
     */
    create<T extends ExportCreateArgs>(args: SelectSubset<T, ExportCreateArgs<ExtArgs>>): Prisma__ExportClient<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exports.
     * @param {ExportCreateManyArgs} args - Arguments to create many Exports.
     * @example
     * // Create many Exports
     * const export = await prisma.export.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExportCreateManyArgs>(args?: SelectSubset<T, ExportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exports and returns the data saved in the database.
     * @param {ExportCreateManyAndReturnArgs} args - Arguments to create many Exports.
     * @example
     * // Create many Exports
     * const export = await prisma.export.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exports and only return the `id`
     * const exportWithIdOnly = await prisma.export.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExportCreateManyAndReturnArgs>(args?: SelectSubset<T, ExportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Export.
     * @param {ExportDeleteArgs} args - Arguments to delete one Export.
     * @example
     * // Delete one Export
     * const Export = await prisma.export.delete({
     *   where: {
     *     // ... filter to delete one Export
     *   }
     * })
     * 
     */
    delete<T extends ExportDeleteArgs>(args: SelectSubset<T, ExportDeleteArgs<ExtArgs>>): Prisma__ExportClient<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Export.
     * @param {ExportUpdateArgs} args - Arguments to update one Export.
     * @example
     * // Update one Export
     * const export = await prisma.export.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExportUpdateArgs>(args: SelectSubset<T, ExportUpdateArgs<ExtArgs>>): Prisma__ExportClient<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exports.
     * @param {ExportDeleteManyArgs} args - Arguments to filter Exports to delete.
     * @example
     * // Delete a few Exports
     * const { count } = await prisma.export.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExportDeleteManyArgs>(args?: SelectSubset<T, ExportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exports
     * const export = await prisma.export.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExportUpdateManyArgs>(args: SelectSubset<T, ExportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exports and returns the data updated in the database.
     * @param {ExportUpdateManyAndReturnArgs} args - Arguments to update many Exports.
     * @example
     * // Update many Exports
     * const export = await prisma.export.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exports and only return the `id`
     * const exportWithIdOnly = await prisma.export.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExportUpdateManyAndReturnArgs>(args: SelectSubset<T, ExportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Export.
     * @param {ExportUpsertArgs} args - Arguments to update or create a Export.
     * @example
     * // Update or create a Export
     * const export = await prisma.export.upsert({
     *   create: {
     *     // ... data to create a Export
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Export we want to update
     *   }
     * })
     */
    upsert<T extends ExportUpsertArgs>(args: SelectSubset<T, ExportUpsertArgs<ExtArgs>>): Prisma__ExportClient<$Result.GetResult<Prisma.$ExportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportCountArgs} args - Arguments to filter Exports to count.
     * @example
     * // Count the number of Exports
     * const count = await prisma.export.count({
     *   where: {
     *     // ... the filter for the Exports we want to count
     *   }
     * })
    **/
    count<T extends ExportCountArgs>(
      args?: Subset<T, ExportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Export.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExportAggregateArgs>(args: Subset<T, ExportAggregateArgs>): Prisma.PrismaPromise<GetExportAggregateType<T>>

    /**
     * Group by Export.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportGroupByArgs} args - Group by arguments.
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
      T extends ExportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExportGroupByArgs['orderBy'] }
        : { orderBy?: ExportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Export model
   */
  readonly fields: ExportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Export.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Export model
   */
  interface ExportFieldRefs {
    readonly id: FieldRef<"Export", 'String'>
    readonly userId: FieldRef<"Export", 'String'>
    readonly resumeId: FieldRef<"Export", 'String'>
    readonly format: FieldRef<"Export", 'ExportFormat'>
    readonly status: FieldRef<"Export", 'ExportStatus'>
    readonly fileUrl: FieldRef<"Export", 'String'>
    readonly errorMessage: FieldRef<"Export", 'String'>
    readonly createdAt: FieldRef<"Export", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Export findUnique
   */
  export type ExportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    /**
     * Filter, which Export to fetch.
     */
    where: ExportWhereUniqueInput
  }

  /**
   * Export findUniqueOrThrow
   */
  export type ExportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    /**
     * Filter, which Export to fetch.
     */
    where: ExportWhereUniqueInput
  }

  /**
   * Export findFirst
   */
  export type ExportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    /**
     * Filter, which Export to fetch.
     */
    where?: ExportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exports to fetch.
     */
    orderBy?: ExportOrderByWithRelationInput | ExportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exports.
     */
    cursor?: ExportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exports.
     */
    distinct?: ExportScalarFieldEnum | ExportScalarFieldEnum[]
  }

  /**
   * Export findFirstOrThrow
   */
  export type ExportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    /**
     * Filter, which Export to fetch.
     */
    where?: ExportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exports to fetch.
     */
    orderBy?: ExportOrderByWithRelationInput | ExportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exports.
     */
    cursor?: ExportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exports.
     */
    distinct?: ExportScalarFieldEnum | ExportScalarFieldEnum[]
  }

  /**
   * Export findMany
   */
  export type ExportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    /**
     * Filter, which Exports to fetch.
     */
    where?: ExportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exports to fetch.
     */
    orderBy?: ExportOrderByWithRelationInput | ExportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exports.
     */
    cursor?: ExportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exports.
     */
    distinct?: ExportScalarFieldEnum | ExportScalarFieldEnum[]
  }

  /**
   * Export create
   */
  export type ExportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    /**
     * The data needed to create a Export.
     */
    data: XOR<ExportCreateInput, ExportUncheckedCreateInput>
  }

  /**
   * Export createMany
   */
  export type ExportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exports.
     */
    data: ExportCreateManyInput | ExportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Export createManyAndReturn
   */
  export type ExportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * The data used to create many Exports.
     */
    data: ExportCreateManyInput | ExportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Export update
   */
  export type ExportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    /**
     * The data needed to update a Export.
     */
    data: XOR<ExportUpdateInput, ExportUncheckedUpdateInput>
    /**
     * Choose, which Export to update.
     */
    where: ExportWhereUniqueInput
  }

  /**
   * Export updateMany
   */
  export type ExportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exports.
     */
    data: XOR<ExportUpdateManyMutationInput, ExportUncheckedUpdateManyInput>
    /**
     * Filter which Exports to update
     */
    where?: ExportWhereInput
    /**
     * Limit how many Exports to update.
     */
    limit?: number
  }

  /**
   * Export updateManyAndReturn
   */
  export type ExportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * The data used to update Exports.
     */
    data: XOR<ExportUpdateManyMutationInput, ExportUncheckedUpdateManyInput>
    /**
     * Filter which Exports to update
     */
    where?: ExportWhereInput
    /**
     * Limit how many Exports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Export upsert
   */
  export type ExportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    /**
     * The filter to search for the Export to update in case it exists.
     */
    where: ExportWhereUniqueInput
    /**
     * In case the Export found by the `where` argument doesn't exist, create a new Export with this data.
     */
    create: XOR<ExportCreateInput, ExportUncheckedCreateInput>
    /**
     * In case the Export was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExportUpdateInput, ExportUncheckedUpdateInput>
  }

  /**
   * Export delete
   */
  export type ExportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
    /**
     * Filter which Export to delete.
     */
    where: ExportWhereUniqueInput
  }

  /**
   * Export deleteMany
   */
  export type ExportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exports to delete
     */
    where?: ExportWhereInput
    /**
     * Limit how many Exports to delete.
     */
    limit?: number
  }

  /**
   * Export without action
   */
  export type ExportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Export
     */
    select?: ExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Export
     */
    omit?: ExportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    avatarUrl: 'avatarUrl',
    isVerified: 'isVerified',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    slug: 'slug',
    templateKey: 'templateKey',
    status: 'status',
    personalInfo: 'personalInfo',
    professionalSummary: 'professionalSummary',
    education: 'education',
    experience: 'experience',
    skills: 'skills',
    projects: 'projects',
    certifications: 'certifications',
    languages: 'languages',
    socialLinks: 'socialLinks',
    themeSettings: 'themeSettings',
    customSections: 'customSections',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const ResumeVersionScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    versionNumber: 'versionNumber',
    snapshot: 'snapshot',
    changeNote: 'changeNote',
    createdAt: 'createdAt'
  };

  export type ResumeVersionScalarFieldEnum = (typeof ResumeVersionScalarFieldEnum)[keyof typeof ResumeVersionScalarFieldEnum]


  export const AIGenerationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    resumeId: 'resumeId',
    generationType: 'generationType',
    inputPrompt: 'inputPrompt',
    inputContext: 'inputContext',
    outputText: 'outputText',
    modelName: 'modelName',
    tokensUsed: 'tokensUsed',
    isSavedToResume: 'isSavedToResume',
    createdAt: 'createdAt'
  };

  export type AIGenerationScalarFieldEnum = (typeof AIGenerationScalarFieldEnum)[keyof typeof AIGenerationScalarFieldEnum]


  export const ExportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    resumeId: 'resumeId',
    format: 'format',
    status: 'status',
    fileUrl: 'fileUrl',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type ExportScalarFieldEnum = (typeof ExportScalarFieldEnum)[keyof typeof ExportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ResumeStatus'
   */
  export type EnumResumeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResumeStatus'>
    


  /**
   * Reference to a field of type 'ResumeStatus[]'
   */
  export type ListEnumResumeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResumeStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AIGenerationType'
   */
  export type EnumAIGenerationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIGenerationType'>
    


  /**
   * Reference to a field of type 'AIGenerationType[]'
   */
  export type ListEnumAIGenerationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIGenerationType[]'>
    


  /**
   * Reference to a field of type 'ExportFormat'
   */
  export type EnumExportFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExportFormat'>
    


  /**
   * Reference to a field of type 'ExportFormat[]'
   */
  export type ListEnumExportFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExportFormat[]'>
    


  /**
   * Reference to a field of type 'ExportStatus'
   */
  export type EnumExportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExportStatus'>
    


  /**
   * Reference to a field of type 'ExportStatus[]'
   */
  export type ListEnumExportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExportStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resumes?: ResumeListRelationFilter
    aiGenerations?: AIGenerationListRelationFilter
    exports?: ExportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumes?: ResumeOrderByRelationAggregateInput
    aiGenerations?: AIGenerationOrderByRelationAggregateInput
    exports?: ExportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resumes?: ResumeListRelationFilter
    aiGenerations?: AIGenerationListRelationFilter
    exports?: ExportListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: UuidFilter<"Resume"> | string
    userId?: UuidFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    slug?: StringFilter<"Resume"> | string
    templateKey?: StringFilter<"Resume"> | string
    status?: EnumResumeStatusFilter<"Resume"> | $Enums.ResumeStatus
    personalInfo?: JsonFilter<"Resume">
    professionalSummary?: StringNullableFilter<"Resume"> | string | null
    education?: JsonFilter<"Resume">
    experience?: JsonFilter<"Resume">
    skills?: JsonFilter<"Resume">
    projects?: JsonNullableFilter<"Resume">
    certifications?: JsonNullableFilter<"Resume">
    languages?: JsonNullableFilter<"Resume">
    socialLinks?: JsonNullableFilter<"Resume">
    themeSettings?: JsonNullableFilter<"Resume">
    customSections?: JsonNullableFilter<"Resume">
    isPrimary?: BoolFilter<"Resume"> | boolean
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    versions?: ResumeVersionListRelationFilter
    aiGenerations?: AIGenerationListRelationFilter
    exports?: ExportListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    templateKey?: SortOrder
    status?: SortOrder
    personalInfo?: SortOrder
    professionalSummary?: SortOrderInput | SortOrder
    education?: SortOrder
    experience?: SortOrder
    skills?: SortOrder
    projects?: SortOrderInput | SortOrder
    certifications?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    themeSettings?: SortOrderInput | SortOrder
    customSections?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    versions?: ResumeVersionOrderByRelationAggregateInput
    aiGenerations?: AIGenerationOrderByRelationAggregateInput
    exports?: ExportOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    userId?: UuidFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    templateKey?: StringFilter<"Resume"> | string
    status?: EnumResumeStatusFilter<"Resume"> | $Enums.ResumeStatus
    personalInfo?: JsonFilter<"Resume">
    professionalSummary?: StringNullableFilter<"Resume"> | string | null
    education?: JsonFilter<"Resume">
    experience?: JsonFilter<"Resume">
    skills?: JsonFilter<"Resume">
    projects?: JsonNullableFilter<"Resume">
    certifications?: JsonNullableFilter<"Resume">
    languages?: JsonNullableFilter<"Resume">
    socialLinks?: JsonNullableFilter<"Resume">
    themeSettings?: JsonNullableFilter<"Resume">
    customSections?: JsonNullableFilter<"Resume">
    isPrimary?: BoolFilter<"Resume"> | boolean
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    versions?: ResumeVersionListRelationFilter
    aiGenerations?: AIGenerationListRelationFilter
    exports?: ExportListRelationFilter
  }, "id" | "slug">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    templateKey?: SortOrder
    status?: SortOrder
    personalInfo?: SortOrder
    professionalSummary?: SortOrderInput | SortOrder
    education?: SortOrder
    experience?: SortOrder
    skills?: SortOrder
    projects?: SortOrderInput | SortOrder
    certifications?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    themeSettings?: SortOrderInput | SortOrder
    customSections?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Resume"> | string
    userId?: UuidWithAggregatesFilter<"Resume"> | string
    title?: StringWithAggregatesFilter<"Resume"> | string
    slug?: StringWithAggregatesFilter<"Resume"> | string
    templateKey?: StringWithAggregatesFilter<"Resume"> | string
    status?: EnumResumeStatusWithAggregatesFilter<"Resume"> | $Enums.ResumeStatus
    personalInfo?: JsonWithAggregatesFilter<"Resume">
    professionalSummary?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    education?: JsonWithAggregatesFilter<"Resume">
    experience?: JsonWithAggregatesFilter<"Resume">
    skills?: JsonWithAggregatesFilter<"Resume">
    projects?: JsonNullableWithAggregatesFilter<"Resume">
    certifications?: JsonNullableWithAggregatesFilter<"Resume">
    languages?: JsonNullableWithAggregatesFilter<"Resume">
    socialLinks?: JsonNullableWithAggregatesFilter<"Resume">
    themeSettings?: JsonNullableWithAggregatesFilter<"Resume">
    customSections?: JsonNullableWithAggregatesFilter<"Resume">
    isPrimary?: BoolWithAggregatesFilter<"Resume"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type ResumeVersionWhereInput = {
    AND?: ResumeVersionWhereInput | ResumeVersionWhereInput[]
    OR?: ResumeVersionWhereInput[]
    NOT?: ResumeVersionWhereInput | ResumeVersionWhereInput[]
    id?: UuidFilter<"ResumeVersion"> | string
    resumeId?: UuidFilter<"ResumeVersion"> | string
    versionNumber?: IntFilter<"ResumeVersion"> | number
    snapshot?: JsonFilter<"ResumeVersion">
    changeNote?: StringNullableFilter<"ResumeVersion"> | string | null
    createdAt?: DateTimeFilter<"ResumeVersion"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type ResumeVersionOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    versionNumber?: SortOrder
    snapshot?: SortOrder
    changeNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type ResumeVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    resumeId_versionNumber?: ResumeVersionResumeIdVersionNumberCompoundUniqueInput
    AND?: ResumeVersionWhereInput | ResumeVersionWhereInput[]
    OR?: ResumeVersionWhereInput[]
    NOT?: ResumeVersionWhereInput | ResumeVersionWhereInput[]
    resumeId?: UuidFilter<"ResumeVersion"> | string
    versionNumber?: IntFilter<"ResumeVersion"> | number
    snapshot?: JsonFilter<"ResumeVersion">
    changeNote?: StringNullableFilter<"ResumeVersion"> | string | null
    createdAt?: DateTimeFilter<"ResumeVersion"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id" | "resumeId_versionNumber">

  export type ResumeVersionOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    versionNumber?: SortOrder
    snapshot?: SortOrder
    changeNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ResumeVersionCountOrderByAggregateInput
    _avg?: ResumeVersionAvgOrderByAggregateInput
    _max?: ResumeVersionMaxOrderByAggregateInput
    _min?: ResumeVersionMinOrderByAggregateInput
    _sum?: ResumeVersionSumOrderByAggregateInput
  }

  export type ResumeVersionScalarWhereWithAggregatesInput = {
    AND?: ResumeVersionScalarWhereWithAggregatesInput | ResumeVersionScalarWhereWithAggregatesInput[]
    OR?: ResumeVersionScalarWhereWithAggregatesInput[]
    NOT?: ResumeVersionScalarWhereWithAggregatesInput | ResumeVersionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ResumeVersion"> | string
    resumeId?: UuidWithAggregatesFilter<"ResumeVersion"> | string
    versionNumber?: IntWithAggregatesFilter<"ResumeVersion"> | number
    snapshot?: JsonWithAggregatesFilter<"ResumeVersion">
    changeNote?: StringNullableWithAggregatesFilter<"ResumeVersion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ResumeVersion"> | Date | string
  }

  export type AIGenerationWhereInput = {
    AND?: AIGenerationWhereInput | AIGenerationWhereInput[]
    OR?: AIGenerationWhereInput[]
    NOT?: AIGenerationWhereInput | AIGenerationWhereInput[]
    id?: UuidFilter<"AIGeneration"> | string
    userId?: UuidFilter<"AIGeneration"> | string
    resumeId?: UuidNullableFilter<"AIGeneration"> | string | null
    generationType?: EnumAIGenerationTypeFilter<"AIGeneration"> | $Enums.AIGenerationType
    inputPrompt?: StringFilter<"AIGeneration"> | string
    inputContext?: JsonNullableFilter<"AIGeneration">
    outputText?: StringFilter<"AIGeneration"> | string
    modelName?: StringNullableFilter<"AIGeneration"> | string | null
    tokensUsed?: IntNullableFilter<"AIGeneration"> | number | null
    isSavedToResume?: BoolFilter<"AIGeneration"> | boolean
    createdAt?: DateTimeFilter<"AIGeneration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
  }

  export type AIGenerationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrderInput | SortOrder
    generationType?: SortOrder
    inputPrompt?: SortOrder
    inputContext?: SortOrderInput | SortOrder
    outputText?: SortOrder
    modelName?: SortOrderInput | SortOrder
    tokensUsed?: SortOrderInput | SortOrder
    isSavedToResume?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type AIGenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIGenerationWhereInput | AIGenerationWhereInput[]
    OR?: AIGenerationWhereInput[]
    NOT?: AIGenerationWhereInput | AIGenerationWhereInput[]
    userId?: UuidFilter<"AIGeneration"> | string
    resumeId?: UuidNullableFilter<"AIGeneration"> | string | null
    generationType?: EnumAIGenerationTypeFilter<"AIGeneration"> | $Enums.AIGenerationType
    inputPrompt?: StringFilter<"AIGeneration"> | string
    inputContext?: JsonNullableFilter<"AIGeneration">
    outputText?: StringFilter<"AIGeneration"> | string
    modelName?: StringNullableFilter<"AIGeneration"> | string | null
    tokensUsed?: IntNullableFilter<"AIGeneration"> | number | null
    isSavedToResume?: BoolFilter<"AIGeneration"> | boolean
    createdAt?: DateTimeFilter<"AIGeneration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
  }, "id">

  export type AIGenerationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrderInput | SortOrder
    generationType?: SortOrder
    inputPrompt?: SortOrder
    inputContext?: SortOrderInput | SortOrder
    outputText?: SortOrder
    modelName?: SortOrderInput | SortOrder
    tokensUsed?: SortOrderInput | SortOrder
    isSavedToResume?: SortOrder
    createdAt?: SortOrder
    _count?: AIGenerationCountOrderByAggregateInput
    _avg?: AIGenerationAvgOrderByAggregateInput
    _max?: AIGenerationMaxOrderByAggregateInput
    _min?: AIGenerationMinOrderByAggregateInput
    _sum?: AIGenerationSumOrderByAggregateInput
  }

  export type AIGenerationScalarWhereWithAggregatesInput = {
    AND?: AIGenerationScalarWhereWithAggregatesInput | AIGenerationScalarWhereWithAggregatesInput[]
    OR?: AIGenerationScalarWhereWithAggregatesInput[]
    NOT?: AIGenerationScalarWhereWithAggregatesInput | AIGenerationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AIGeneration"> | string
    userId?: UuidWithAggregatesFilter<"AIGeneration"> | string
    resumeId?: UuidNullableWithAggregatesFilter<"AIGeneration"> | string | null
    generationType?: EnumAIGenerationTypeWithAggregatesFilter<"AIGeneration"> | $Enums.AIGenerationType
    inputPrompt?: StringWithAggregatesFilter<"AIGeneration"> | string
    inputContext?: JsonNullableWithAggregatesFilter<"AIGeneration">
    outputText?: StringWithAggregatesFilter<"AIGeneration"> | string
    modelName?: StringNullableWithAggregatesFilter<"AIGeneration"> | string | null
    tokensUsed?: IntNullableWithAggregatesFilter<"AIGeneration"> | number | null
    isSavedToResume?: BoolWithAggregatesFilter<"AIGeneration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AIGeneration"> | Date | string
  }

  export type ExportWhereInput = {
    AND?: ExportWhereInput | ExportWhereInput[]
    OR?: ExportWhereInput[]
    NOT?: ExportWhereInput | ExportWhereInput[]
    id?: UuidFilter<"Export"> | string
    userId?: UuidFilter<"Export"> | string
    resumeId?: UuidFilter<"Export"> | string
    format?: EnumExportFormatFilter<"Export"> | $Enums.ExportFormat
    status?: EnumExportStatusFilter<"Export"> | $Enums.ExportStatus
    fileUrl?: StringNullableFilter<"Export"> | string | null
    errorMessage?: StringNullableFilter<"Export"> | string | null
    createdAt?: DateTimeFilter<"Export"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type ExportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrder
    format?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type ExportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExportWhereInput | ExportWhereInput[]
    OR?: ExportWhereInput[]
    NOT?: ExportWhereInput | ExportWhereInput[]
    userId?: UuidFilter<"Export"> | string
    resumeId?: UuidFilter<"Export"> | string
    format?: EnumExportFormatFilter<"Export"> | $Enums.ExportFormat
    status?: EnumExportStatusFilter<"Export"> | $Enums.ExportStatus
    fileUrl?: StringNullableFilter<"Export"> | string | null
    errorMessage?: StringNullableFilter<"Export"> | string | null
    createdAt?: DateTimeFilter<"Export"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type ExportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrder
    format?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExportCountOrderByAggregateInput
    _max?: ExportMaxOrderByAggregateInput
    _min?: ExportMinOrderByAggregateInput
  }

  export type ExportScalarWhereWithAggregatesInput = {
    AND?: ExportScalarWhereWithAggregatesInput | ExportScalarWhereWithAggregatesInput[]
    OR?: ExportScalarWhereWithAggregatesInput[]
    NOT?: ExportScalarWhereWithAggregatesInput | ExportScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Export"> | string
    userId?: UuidWithAggregatesFilter<"Export"> | string
    resumeId?: UuidWithAggregatesFilter<"Export"> | string
    format?: EnumExportFormatWithAggregatesFilter<"Export"> | $Enums.ExportFormat
    status?: EnumExportStatusWithAggregatesFilter<"Export"> | $Enums.ExportStatus
    fileUrl?: StringNullableWithAggregatesFilter<"Export"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"Export"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Export"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    aiGenerations?: AIGenerationCreateNestedManyWithoutUserInput
    exports?: ExportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    aiGenerations?: AIGenerationUncheckedCreateNestedManyWithoutUserInput
    exports?: ExportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    aiGenerations?: AIGenerationUpdateManyWithoutUserNestedInput
    exports?: ExportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    aiGenerations?: AIGenerationUncheckedUpdateManyWithoutUserNestedInput
    exports?: ExportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    aiGenerations?: AIGenerationCreateNestedManyWithoutResumeInput
    exports?: ExportCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    aiGenerations?: AIGenerationUncheckedCreateNestedManyWithoutResumeInput
    exports?: ExportUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    aiGenerations?: AIGenerationUpdateManyWithoutResumeNestedInput
    exports?: ExportUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    aiGenerations?: AIGenerationUncheckedUpdateManyWithoutResumeNestedInput
    exports?: ExportUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    userId: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionCreateInput = {
    id?: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    changeNote?: string | null
    createdAt?: Date | string
    resume: ResumeCreateNestedOneWithoutVersionsInput
  }

  export type ResumeVersionUncheckedCreateInput = {
    id?: string
    resumeId: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type ResumeVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type ResumeVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionCreateManyInput = {
    id?: string
    resumeId: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type ResumeVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationCreateInput = {
    id?: string
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText: string
    modelName?: string | null
    tokensUsed?: number | null
    isSavedToResume?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiGenerationsInput
    resume?: ResumeCreateNestedOneWithoutAiGenerationsInput
  }

  export type AIGenerationUncheckedCreateInput = {
    id?: string
    userId: string
    resumeId?: string | null
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText: string
    modelName?: string | null
    tokensUsed?: number | null
    isSavedToResume?: boolean
    createdAt?: Date | string
  }

  export type AIGenerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiGenerationsNestedInput
    resume?: ResumeUpdateOneWithoutAiGenerationsNestedInput
  }

  export type AIGenerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationCreateManyInput = {
    id?: string
    userId: string
    resumeId?: string | null
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText: string
    modelName?: string | null
    tokensUsed?: number | null
    isSavedToResume?: boolean
    createdAt?: Date | string
  }

  export type AIGenerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportCreateInput = {
    id?: string
    format?: $Enums.ExportFormat
    status?: $Enums.ExportStatus
    fileUrl?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutExportsInput
    resume: ResumeCreateNestedOneWithoutExportsInput
  }

  export type ExportUncheckedCreateInput = {
    id?: string
    userId: string
    resumeId: string
    format?: $Enums.ExportFormat
    status?: $Enums.ExportStatus
    fileUrl?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ExportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExportsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutExportsNestedInput
  }

  export type ExportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportCreateManyInput = {
    id?: string
    userId: string
    resumeId: string
    format?: $Enums.ExportFormat
    status?: $Enums.ExportStatus
    fileUrl?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ExportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type AIGenerationListRelationFilter = {
    every?: AIGenerationWhereInput
    some?: AIGenerationWhereInput
    none?: AIGenerationWhereInput
  }

  export type ExportListRelationFilter = {
    every?: ExportWhereInput
    some?: ExportWhereInput
    none?: ExportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIGenerationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumResumeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumeStatus | EnumResumeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResumeStatusFilter<$PrismaModel> | $Enums.ResumeStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResumeVersionListRelationFilter = {
    every?: ResumeVersionWhereInput
    some?: ResumeVersionWhereInput
    none?: ResumeVersionWhereInput
  }

  export type ResumeVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    templateKey?: SortOrder
    status?: SortOrder
    personalInfo?: SortOrder
    professionalSummary?: SortOrder
    education?: SortOrder
    experience?: SortOrder
    skills?: SortOrder
    projects?: SortOrder
    certifications?: SortOrder
    languages?: SortOrder
    socialLinks?: SortOrder
    themeSettings?: SortOrder
    customSections?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    templateKey?: SortOrder
    status?: SortOrder
    professionalSummary?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    templateKey?: SortOrder
    status?: SortOrder
    professionalSummary?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumResumeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumeStatus | EnumResumeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResumeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResumeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResumeStatusFilter<$PrismaModel>
    _max?: NestedEnumResumeStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type ResumeScalarRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type ResumeVersionResumeIdVersionNumberCompoundUniqueInput = {
    resumeId: string
    versionNumber: number
  }

  export type ResumeVersionCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    versionNumber?: SortOrder
    snapshot?: SortOrder
    changeNote?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeVersionAvgOrderByAggregateInput = {
    versionNumber?: SortOrder
  }

  export type ResumeVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    versionNumber?: SortOrder
    changeNote?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeVersionMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    versionNumber?: SortOrder
    changeNote?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeVersionSumOrderByAggregateInput = {
    versionNumber?: SortOrder
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAIGenerationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AIGenerationType | EnumAIGenerationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIGenerationType[] | ListEnumAIGenerationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIGenerationType[] | ListEnumAIGenerationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIGenerationTypeFilter<$PrismaModel> | $Enums.AIGenerationType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ResumeNullableScalarRelationFilter = {
    is?: ResumeWhereInput | null
    isNot?: ResumeWhereInput | null
  }

  export type AIGenerationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrder
    generationType?: SortOrder
    inputPrompt?: SortOrder
    inputContext?: SortOrder
    outputText?: SortOrder
    modelName?: SortOrder
    tokensUsed?: SortOrder
    isSavedToResume?: SortOrder
    createdAt?: SortOrder
  }

  export type AIGenerationAvgOrderByAggregateInput = {
    tokensUsed?: SortOrder
  }

  export type AIGenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrder
    generationType?: SortOrder
    inputPrompt?: SortOrder
    outputText?: SortOrder
    modelName?: SortOrder
    tokensUsed?: SortOrder
    isSavedToResume?: SortOrder
    createdAt?: SortOrder
  }

  export type AIGenerationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrder
    generationType?: SortOrder
    inputPrompt?: SortOrder
    outputText?: SortOrder
    modelName?: SortOrder
    tokensUsed?: SortOrder
    isSavedToResume?: SortOrder
    createdAt?: SortOrder
  }

  export type AIGenerationSumOrderByAggregateInput = {
    tokensUsed?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAIGenerationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIGenerationType | EnumAIGenerationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIGenerationType[] | ListEnumAIGenerationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIGenerationType[] | ListEnumAIGenerationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIGenerationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AIGenerationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIGenerationTypeFilter<$PrismaModel>
    _max?: NestedEnumAIGenerationTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumExportFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportFormat | EnumExportFormatFieldRefInput<$PrismaModel>
    in?: $Enums.ExportFormat[] | ListEnumExportFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExportFormat[] | ListEnumExportFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumExportFormatFilter<$PrismaModel> | $Enums.ExportFormat
  }

  export type EnumExportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportStatus | EnumExportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExportStatus[] | ListEnumExportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExportStatus[] | ListEnumExportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExportStatusFilter<$PrismaModel> | $Enums.ExportStatus
  }

  export type ExportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrder
    format?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type ExportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrder
    format?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type ExportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeId?: SortOrder
    format?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumExportFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportFormat | EnumExportFormatFieldRefInput<$PrismaModel>
    in?: $Enums.ExportFormat[] | ListEnumExportFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExportFormat[] | ListEnumExportFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumExportFormatWithAggregatesFilter<$PrismaModel> | $Enums.ExportFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExportFormatFilter<$PrismaModel>
    _max?: NestedEnumExportFormatFilter<$PrismaModel>
  }

  export type EnumExportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportStatus | EnumExportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExportStatus[] | ListEnumExportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExportStatus[] | ListEnumExportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExportStatusFilter<$PrismaModel>
    _max?: NestedEnumExportStatusFilter<$PrismaModel>
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type AIGenerationCreateNestedManyWithoutUserInput = {
    create?: XOR<AIGenerationCreateWithoutUserInput, AIGenerationUncheckedCreateWithoutUserInput> | AIGenerationCreateWithoutUserInput[] | AIGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIGenerationCreateOrConnectWithoutUserInput | AIGenerationCreateOrConnectWithoutUserInput[]
    createMany?: AIGenerationCreateManyUserInputEnvelope
    connect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
  }

  export type ExportCreateNestedManyWithoutUserInput = {
    create?: XOR<ExportCreateWithoutUserInput, ExportUncheckedCreateWithoutUserInput> | ExportCreateWithoutUserInput[] | ExportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExportCreateOrConnectWithoutUserInput | ExportCreateOrConnectWithoutUserInput[]
    createMany?: ExportCreateManyUserInputEnvelope
    connect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type AIGenerationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AIGenerationCreateWithoutUserInput, AIGenerationUncheckedCreateWithoutUserInput> | AIGenerationCreateWithoutUserInput[] | AIGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIGenerationCreateOrConnectWithoutUserInput | AIGenerationCreateOrConnectWithoutUserInput[]
    createMany?: AIGenerationCreateManyUserInputEnvelope
    connect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
  }

  export type ExportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExportCreateWithoutUserInput, ExportUncheckedCreateWithoutUserInput> | ExportCreateWithoutUserInput[] | ExportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExportCreateOrConnectWithoutUserInput | ExportCreateOrConnectWithoutUserInput[]
    createMany?: ExportCreateManyUserInputEnvelope
    connect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type AIGenerationUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIGenerationCreateWithoutUserInput, AIGenerationUncheckedCreateWithoutUserInput> | AIGenerationCreateWithoutUserInput[] | AIGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIGenerationCreateOrConnectWithoutUserInput | AIGenerationCreateOrConnectWithoutUserInput[]
    upsert?: AIGenerationUpsertWithWhereUniqueWithoutUserInput | AIGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIGenerationCreateManyUserInputEnvelope
    set?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    disconnect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    delete?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    connect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    update?: AIGenerationUpdateWithWhereUniqueWithoutUserInput | AIGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIGenerationUpdateManyWithWhereWithoutUserInput | AIGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIGenerationScalarWhereInput | AIGenerationScalarWhereInput[]
  }

  export type ExportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExportCreateWithoutUserInput, ExportUncheckedCreateWithoutUserInput> | ExportCreateWithoutUserInput[] | ExportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExportCreateOrConnectWithoutUserInput | ExportCreateOrConnectWithoutUserInput[]
    upsert?: ExportUpsertWithWhereUniqueWithoutUserInput | ExportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExportCreateManyUserInputEnvelope
    set?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    disconnect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    delete?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    connect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    update?: ExportUpdateWithWhereUniqueWithoutUserInput | ExportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExportUpdateManyWithWhereWithoutUserInput | ExportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExportScalarWhereInput | ExportScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type AIGenerationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIGenerationCreateWithoutUserInput, AIGenerationUncheckedCreateWithoutUserInput> | AIGenerationCreateWithoutUserInput[] | AIGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIGenerationCreateOrConnectWithoutUserInput | AIGenerationCreateOrConnectWithoutUserInput[]
    upsert?: AIGenerationUpsertWithWhereUniqueWithoutUserInput | AIGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIGenerationCreateManyUserInputEnvelope
    set?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    disconnect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    delete?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    connect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    update?: AIGenerationUpdateWithWhereUniqueWithoutUserInput | AIGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIGenerationUpdateManyWithWhereWithoutUserInput | AIGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIGenerationScalarWhereInput | AIGenerationScalarWhereInput[]
  }

  export type ExportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExportCreateWithoutUserInput, ExportUncheckedCreateWithoutUserInput> | ExportCreateWithoutUserInput[] | ExportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExportCreateOrConnectWithoutUserInput | ExportCreateOrConnectWithoutUserInput[]
    upsert?: ExportUpsertWithWhereUniqueWithoutUserInput | ExportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExportCreateManyUserInputEnvelope
    set?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    disconnect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    delete?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    connect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    update?: ExportUpdateWithWhereUniqueWithoutUserInput | ExportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExportUpdateManyWithWhereWithoutUserInput | ExportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExportScalarWhereInput | ExportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeVersionCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput> | ResumeVersionCreateWithoutResumeInput[] | ResumeVersionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeVersionCreateOrConnectWithoutResumeInput | ResumeVersionCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeVersionCreateManyResumeInputEnvelope
    connect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
  }

  export type AIGenerationCreateNestedManyWithoutResumeInput = {
    create?: XOR<AIGenerationCreateWithoutResumeInput, AIGenerationUncheckedCreateWithoutResumeInput> | AIGenerationCreateWithoutResumeInput[] | AIGenerationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AIGenerationCreateOrConnectWithoutResumeInput | AIGenerationCreateOrConnectWithoutResumeInput[]
    createMany?: AIGenerationCreateManyResumeInputEnvelope
    connect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
  }

  export type ExportCreateNestedManyWithoutResumeInput = {
    create?: XOR<ExportCreateWithoutResumeInput, ExportUncheckedCreateWithoutResumeInput> | ExportCreateWithoutResumeInput[] | ExportUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ExportCreateOrConnectWithoutResumeInput | ExportCreateOrConnectWithoutResumeInput[]
    createMany?: ExportCreateManyResumeInputEnvelope
    connect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
  }

  export type ResumeVersionUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput> | ResumeVersionCreateWithoutResumeInput[] | ResumeVersionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeVersionCreateOrConnectWithoutResumeInput | ResumeVersionCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeVersionCreateManyResumeInputEnvelope
    connect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
  }

  export type AIGenerationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<AIGenerationCreateWithoutResumeInput, AIGenerationUncheckedCreateWithoutResumeInput> | AIGenerationCreateWithoutResumeInput[] | AIGenerationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AIGenerationCreateOrConnectWithoutResumeInput | AIGenerationCreateOrConnectWithoutResumeInput[]
    createMany?: AIGenerationCreateManyResumeInputEnvelope
    connect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
  }

  export type ExportUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ExportCreateWithoutResumeInput, ExportUncheckedCreateWithoutResumeInput> | ExportCreateWithoutResumeInput[] | ExportUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ExportCreateOrConnectWithoutResumeInput | ExportCreateOrConnectWithoutResumeInput[]
    createMany?: ExportCreateManyResumeInputEnvelope
    connect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
  }

  export type EnumResumeStatusFieldUpdateOperationsInput = {
    set?: $Enums.ResumeStatus
  }

  export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    upsert?: UserUpsertWithoutResumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumesInput, UserUpdateWithoutResumesInput>, UserUncheckedUpdateWithoutResumesInput>
  }

  export type ResumeVersionUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput> | ResumeVersionCreateWithoutResumeInput[] | ResumeVersionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeVersionCreateOrConnectWithoutResumeInput | ResumeVersionCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeVersionUpsertWithWhereUniqueWithoutResumeInput | ResumeVersionUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeVersionCreateManyResumeInputEnvelope
    set?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    disconnect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    delete?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    connect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    update?: ResumeVersionUpdateWithWhereUniqueWithoutResumeInput | ResumeVersionUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeVersionUpdateManyWithWhereWithoutResumeInput | ResumeVersionUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeVersionScalarWhereInput | ResumeVersionScalarWhereInput[]
  }

  export type AIGenerationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<AIGenerationCreateWithoutResumeInput, AIGenerationUncheckedCreateWithoutResumeInput> | AIGenerationCreateWithoutResumeInput[] | AIGenerationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AIGenerationCreateOrConnectWithoutResumeInput | AIGenerationCreateOrConnectWithoutResumeInput[]
    upsert?: AIGenerationUpsertWithWhereUniqueWithoutResumeInput | AIGenerationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: AIGenerationCreateManyResumeInputEnvelope
    set?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    disconnect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    delete?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    connect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    update?: AIGenerationUpdateWithWhereUniqueWithoutResumeInput | AIGenerationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: AIGenerationUpdateManyWithWhereWithoutResumeInput | AIGenerationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: AIGenerationScalarWhereInput | AIGenerationScalarWhereInput[]
  }

  export type ExportUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ExportCreateWithoutResumeInput, ExportUncheckedCreateWithoutResumeInput> | ExportCreateWithoutResumeInput[] | ExportUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ExportCreateOrConnectWithoutResumeInput | ExportCreateOrConnectWithoutResumeInput[]
    upsert?: ExportUpsertWithWhereUniqueWithoutResumeInput | ExportUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ExportCreateManyResumeInputEnvelope
    set?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    disconnect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    delete?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    connect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    update?: ExportUpdateWithWhereUniqueWithoutResumeInput | ExportUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ExportUpdateManyWithWhereWithoutResumeInput | ExportUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ExportScalarWhereInput | ExportScalarWhereInput[]
  }

  export type ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput> | ResumeVersionCreateWithoutResumeInput[] | ResumeVersionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeVersionCreateOrConnectWithoutResumeInput | ResumeVersionCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeVersionUpsertWithWhereUniqueWithoutResumeInput | ResumeVersionUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeVersionCreateManyResumeInputEnvelope
    set?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    disconnect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    delete?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    connect?: ResumeVersionWhereUniqueInput | ResumeVersionWhereUniqueInput[]
    update?: ResumeVersionUpdateWithWhereUniqueWithoutResumeInput | ResumeVersionUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeVersionUpdateManyWithWhereWithoutResumeInput | ResumeVersionUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeVersionScalarWhereInput | ResumeVersionScalarWhereInput[]
  }

  export type AIGenerationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<AIGenerationCreateWithoutResumeInput, AIGenerationUncheckedCreateWithoutResumeInput> | AIGenerationCreateWithoutResumeInput[] | AIGenerationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AIGenerationCreateOrConnectWithoutResumeInput | AIGenerationCreateOrConnectWithoutResumeInput[]
    upsert?: AIGenerationUpsertWithWhereUniqueWithoutResumeInput | AIGenerationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: AIGenerationCreateManyResumeInputEnvelope
    set?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    disconnect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    delete?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    connect?: AIGenerationWhereUniqueInput | AIGenerationWhereUniqueInput[]
    update?: AIGenerationUpdateWithWhereUniqueWithoutResumeInput | AIGenerationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: AIGenerationUpdateManyWithWhereWithoutResumeInput | AIGenerationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: AIGenerationScalarWhereInput | AIGenerationScalarWhereInput[]
  }

  export type ExportUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ExportCreateWithoutResumeInput, ExportUncheckedCreateWithoutResumeInput> | ExportCreateWithoutResumeInput[] | ExportUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ExportCreateOrConnectWithoutResumeInput | ExportCreateOrConnectWithoutResumeInput[]
    upsert?: ExportUpsertWithWhereUniqueWithoutResumeInput | ExportUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ExportCreateManyResumeInputEnvelope
    set?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    disconnect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    delete?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    connect?: ExportWhereUniqueInput | ExportWhereUniqueInput[]
    update?: ExportUpdateWithWhereUniqueWithoutResumeInput | ExportUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ExportUpdateManyWithWhereWithoutResumeInput | ExportUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ExportScalarWhereInput | ExportScalarWhereInput[]
  }

  export type ResumeCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutVersionsInput
    connect?: ResumeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResumeUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutVersionsInput
    upsert?: ResumeUpsertWithoutVersionsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutVersionsInput, ResumeUpdateWithoutVersionsInput>, ResumeUncheckedUpdateWithoutVersionsInput>
  }

  export type UserCreateNestedOneWithoutAiGenerationsInput = {
    create?: XOR<UserCreateWithoutAiGenerationsInput, UserUncheckedCreateWithoutAiGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiGenerationsInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutAiGenerationsInput = {
    create?: XOR<ResumeCreateWithoutAiGenerationsInput, ResumeUncheckedCreateWithoutAiGenerationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutAiGenerationsInput
    connect?: ResumeWhereUniqueInput
  }

  export type EnumAIGenerationTypeFieldUpdateOperationsInput = {
    set?: $Enums.AIGenerationType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAiGenerationsNestedInput = {
    create?: XOR<UserCreateWithoutAiGenerationsInput, UserUncheckedCreateWithoutAiGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiGenerationsInput
    upsert?: UserUpsertWithoutAiGenerationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiGenerationsInput, UserUpdateWithoutAiGenerationsInput>, UserUncheckedUpdateWithoutAiGenerationsInput>
  }

  export type ResumeUpdateOneWithoutAiGenerationsNestedInput = {
    create?: XOR<ResumeCreateWithoutAiGenerationsInput, ResumeUncheckedCreateWithoutAiGenerationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutAiGenerationsInput
    upsert?: ResumeUpsertWithoutAiGenerationsInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutAiGenerationsInput, ResumeUpdateWithoutAiGenerationsInput>, ResumeUncheckedUpdateWithoutAiGenerationsInput>
  }

  export type UserCreateNestedOneWithoutExportsInput = {
    create?: XOR<UserCreateWithoutExportsInput, UserUncheckedCreateWithoutExportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExportsInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutExportsInput = {
    create?: XOR<ResumeCreateWithoutExportsInput, ResumeUncheckedCreateWithoutExportsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutExportsInput
    connect?: ResumeWhereUniqueInput
  }

  export type EnumExportFormatFieldUpdateOperationsInput = {
    set?: $Enums.ExportFormat
  }

  export type EnumExportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExportStatus
  }

  export type UserUpdateOneRequiredWithoutExportsNestedInput = {
    create?: XOR<UserCreateWithoutExportsInput, UserUncheckedCreateWithoutExportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExportsInput
    upsert?: UserUpsertWithoutExportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExportsInput, UserUpdateWithoutExportsInput>, UserUncheckedUpdateWithoutExportsInput>
  }

  export type ResumeUpdateOneRequiredWithoutExportsNestedInput = {
    create?: XOR<ResumeCreateWithoutExportsInput, ResumeUncheckedCreateWithoutExportsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutExportsInput
    upsert?: ResumeUpsertWithoutExportsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutExportsInput, ResumeUpdateWithoutExportsInput>, ResumeUncheckedUpdateWithoutExportsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumResumeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumeStatus | EnumResumeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResumeStatusFilter<$PrismaModel> | $Enums.ResumeStatus
  }

  export type NestedEnumResumeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumeStatus | EnumResumeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumeStatus[] | ListEnumResumeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResumeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResumeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResumeStatusFilter<$PrismaModel>
    _max?: NestedEnumResumeStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAIGenerationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AIGenerationType | EnumAIGenerationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIGenerationType[] | ListEnumAIGenerationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIGenerationType[] | ListEnumAIGenerationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIGenerationTypeFilter<$PrismaModel> | $Enums.AIGenerationType
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumAIGenerationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIGenerationType | EnumAIGenerationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIGenerationType[] | ListEnumAIGenerationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIGenerationType[] | ListEnumAIGenerationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIGenerationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AIGenerationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIGenerationTypeFilter<$PrismaModel>
    _max?: NestedEnumAIGenerationTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumExportFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportFormat | EnumExportFormatFieldRefInput<$PrismaModel>
    in?: $Enums.ExportFormat[] | ListEnumExportFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExportFormat[] | ListEnumExportFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumExportFormatFilter<$PrismaModel> | $Enums.ExportFormat
  }

  export type NestedEnumExportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportStatus | EnumExportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExportStatus[] | ListEnumExportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExportStatus[] | ListEnumExportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExportStatusFilter<$PrismaModel> | $Enums.ExportStatus
  }

  export type NestedEnumExportFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportFormat | EnumExportFormatFieldRefInput<$PrismaModel>
    in?: $Enums.ExportFormat[] | ListEnumExportFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExportFormat[] | ListEnumExportFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumExportFormatWithAggregatesFilter<$PrismaModel> | $Enums.ExportFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExportFormatFilter<$PrismaModel>
    _max?: NestedEnumExportFormatFilter<$PrismaModel>
  }

  export type NestedEnumExportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportStatus | EnumExportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExportStatus[] | ListEnumExportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExportStatus[] | ListEnumExportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExportStatusFilter<$PrismaModel>
    _max?: NestedEnumExportStatusFilter<$PrismaModel>
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    aiGenerations?: AIGenerationCreateNestedManyWithoutResumeInput
    exports?: ExportCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    aiGenerations?: AIGenerationUncheckedCreateNestedManyWithoutResumeInput
    exports?: ExportUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: ResumeCreateManyUserInput | ResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AIGenerationCreateWithoutUserInput = {
    id?: string
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText: string
    modelName?: string | null
    tokensUsed?: number | null
    isSavedToResume?: boolean
    createdAt?: Date | string
    resume?: ResumeCreateNestedOneWithoutAiGenerationsInput
  }

  export type AIGenerationUncheckedCreateWithoutUserInput = {
    id?: string
    resumeId?: string | null
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText: string
    modelName?: string | null
    tokensUsed?: number | null
    isSavedToResume?: boolean
    createdAt?: Date | string
  }

  export type AIGenerationCreateOrConnectWithoutUserInput = {
    where: AIGenerationWhereUniqueInput
    create: XOR<AIGenerationCreateWithoutUserInput, AIGenerationUncheckedCreateWithoutUserInput>
  }

  export type AIGenerationCreateManyUserInputEnvelope = {
    data: AIGenerationCreateManyUserInput | AIGenerationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExportCreateWithoutUserInput = {
    id?: string
    format?: $Enums.ExportFormat
    status?: $Enums.ExportStatus
    fileUrl?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    resume: ResumeCreateNestedOneWithoutExportsInput
  }

  export type ExportUncheckedCreateWithoutUserInput = {
    id?: string
    resumeId: string
    format?: $Enums.ExportFormat
    status?: $Enums.ExportStatus
    fileUrl?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ExportCreateOrConnectWithoutUserInput = {
    where: ExportWhereUniqueInput
    create: XOR<ExportCreateWithoutUserInput, ExportUncheckedCreateWithoutUserInput>
  }

  export type ExportCreateManyUserInputEnvelope = {
    data: ExportCreateManyUserInput | ExportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    OR?: ResumeScalarWhereInput[]
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    id?: UuidFilter<"Resume"> | string
    userId?: UuidFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    slug?: StringFilter<"Resume"> | string
    templateKey?: StringFilter<"Resume"> | string
    status?: EnumResumeStatusFilter<"Resume"> | $Enums.ResumeStatus
    personalInfo?: JsonFilter<"Resume">
    professionalSummary?: StringNullableFilter<"Resume"> | string | null
    education?: JsonFilter<"Resume">
    experience?: JsonFilter<"Resume">
    skills?: JsonFilter<"Resume">
    projects?: JsonNullableFilter<"Resume">
    certifications?: JsonNullableFilter<"Resume">
    languages?: JsonNullableFilter<"Resume">
    socialLinks?: JsonNullableFilter<"Resume">
    themeSettings?: JsonNullableFilter<"Resume">
    customSections?: JsonNullableFilter<"Resume">
    isPrimary?: BoolFilter<"Resume"> | boolean
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
  }

  export type AIGenerationUpsertWithWhereUniqueWithoutUserInput = {
    where: AIGenerationWhereUniqueInput
    update: XOR<AIGenerationUpdateWithoutUserInput, AIGenerationUncheckedUpdateWithoutUserInput>
    create: XOR<AIGenerationCreateWithoutUserInput, AIGenerationUncheckedCreateWithoutUserInput>
  }

  export type AIGenerationUpdateWithWhereUniqueWithoutUserInput = {
    where: AIGenerationWhereUniqueInput
    data: XOR<AIGenerationUpdateWithoutUserInput, AIGenerationUncheckedUpdateWithoutUserInput>
  }

  export type AIGenerationUpdateManyWithWhereWithoutUserInput = {
    where: AIGenerationScalarWhereInput
    data: XOR<AIGenerationUpdateManyMutationInput, AIGenerationUncheckedUpdateManyWithoutUserInput>
  }

  export type AIGenerationScalarWhereInput = {
    AND?: AIGenerationScalarWhereInput | AIGenerationScalarWhereInput[]
    OR?: AIGenerationScalarWhereInput[]
    NOT?: AIGenerationScalarWhereInput | AIGenerationScalarWhereInput[]
    id?: UuidFilter<"AIGeneration"> | string
    userId?: UuidFilter<"AIGeneration"> | string
    resumeId?: UuidNullableFilter<"AIGeneration"> | string | null
    generationType?: EnumAIGenerationTypeFilter<"AIGeneration"> | $Enums.AIGenerationType
    inputPrompt?: StringFilter<"AIGeneration"> | string
    inputContext?: JsonNullableFilter<"AIGeneration">
    outputText?: StringFilter<"AIGeneration"> | string
    modelName?: StringNullableFilter<"AIGeneration"> | string | null
    tokensUsed?: IntNullableFilter<"AIGeneration"> | number | null
    isSavedToResume?: BoolFilter<"AIGeneration"> | boolean
    createdAt?: DateTimeFilter<"AIGeneration"> | Date | string
  }

  export type ExportUpsertWithWhereUniqueWithoutUserInput = {
    where: ExportWhereUniqueInput
    update: XOR<ExportUpdateWithoutUserInput, ExportUncheckedUpdateWithoutUserInput>
    create: XOR<ExportCreateWithoutUserInput, ExportUncheckedCreateWithoutUserInput>
  }

  export type ExportUpdateWithWhereUniqueWithoutUserInput = {
    where: ExportWhereUniqueInput
    data: XOR<ExportUpdateWithoutUserInput, ExportUncheckedUpdateWithoutUserInput>
  }

  export type ExportUpdateManyWithWhereWithoutUserInput = {
    where: ExportScalarWhereInput
    data: XOR<ExportUpdateManyMutationInput, ExportUncheckedUpdateManyWithoutUserInput>
  }

  export type ExportScalarWhereInput = {
    AND?: ExportScalarWhereInput | ExportScalarWhereInput[]
    OR?: ExportScalarWhereInput[]
    NOT?: ExportScalarWhereInput | ExportScalarWhereInput[]
    id?: UuidFilter<"Export"> | string
    userId?: UuidFilter<"Export"> | string
    resumeId?: UuidFilter<"Export"> | string
    format?: EnumExportFormatFilter<"Export"> | $Enums.ExportFormat
    status?: EnumExportStatusFilter<"Export"> | $Enums.ExportStatus
    fileUrl?: StringNullableFilter<"Export"> | string | null
    errorMessage?: StringNullableFilter<"Export"> | string | null
    createdAt?: DateTimeFilter<"Export"> | Date | string
  }

  export type UserCreateWithoutResumesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiGenerations?: AIGenerationCreateNestedManyWithoutUserInput
    exports?: ExportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiGenerations?: AIGenerationUncheckedCreateNestedManyWithoutUserInput
    exports?: ExportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
  }

  export type ResumeVersionCreateWithoutResumeInput = {
    id?: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type ResumeVersionUncheckedCreateWithoutResumeInput = {
    id?: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type ResumeVersionCreateOrConnectWithoutResumeInput = {
    where: ResumeVersionWhereUniqueInput
    create: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput>
  }

  export type ResumeVersionCreateManyResumeInputEnvelope = {
    data: ResumeVersionCreateManyResumeInput | ResumeVersionCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type AIGenerationCreateWithoutResumeInput = {
    id?: string
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText: string
    modelName?: string | null
    tokensUsed?: number | null
    isSavedToResume?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiGenerationsInput
  }

  export type AIGenerationUncheckedCreateWithoutResumeInput = {
    id?: string
    userId: string
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText: string
    modelName?: string | null
    tokensUsed?: number | null
    isSavedToResume?: boolean
    createdAt?: Date | string
  }

  export type AIGenerationCreateOrConnectWithoutResumeInput = {
    where: AIGenerationWhereUniqueInput
    create: XOR<AIGenerationCreateWithoutResumeInput, AIGenerationUncheckedCreateWithoutResumeInput>
  }

  export type AIGenerationCreateManyResumeInputEnvelope = {
    data: AIGenerationCreateManyResumeInput | AIGenerationCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type ExportCreateWithoutResumeInput = {
    id?: string
    format?: $Enums.ExportFormat
    status?: $Enums.ExportStatus
    fileUrl?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutExportsInput
  }

  export type ExportUncheckedCreateWithoutResumeInput = {
    id?: string
    userId: string
    format?: $Enums.ExportFormat
    status?: $Enums.ExportStatus
    fileUrl?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ExportCreateOrConnectWithoutResumeInput = {
    where: ExportWhereUniqueInput
    create: XOR<ExportCreateWithoutResumeInput, ExportUncheckedCreateWithoutResumeInput>
  }

  export type ExportCreateManyResumeInputEnvelope = {
    data: ExportCreateManyResumeInput | ExportCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutResumesInput = {
    update: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
  }

  export type UserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerations?: AIGenerationUpdateManyWithoutUserNestedInput
    exports?: ExportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerations?: AIGenerationUncheckedUpdateManyWithoutUserNestedInput
    exports?: ExportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeVersionUpsertWithWhereUniqueWithoutResumeInput = {
    where: ResumeVersionWhereUniqueInput
    update: XOR<ResumeVersionUpdateWithoutResumeInput, ResumeVersionUncheckedUpdateWithoutResumeInput>
    create: XOR<ResumeVersionCreateWithoutResumeInput, ResumeVersionUncheckedCreateWithoutResumeInput>
  }

  export type ResumeVersionUpdateWithWhereUniqueWithoutResumeInput = {
    where: ResumeVersionWhereUniqueInput
    data: XOR<ResumeVersionUpdateWithoutResumeInput, ResumeVersionUncheckedUpdateWithoutResumeInput>
  }

  export type ResumeVersionUpdateManyWithWhereWithoutResumeInput = {
    where: ResumeVersionScalarWhereInput
    data: XOR<ResumeVersionUpdateManyMutationInput, ResumeVersionUncheckedUpdateManyWithoutResumeInput>
  }

  export type ResumeVersionScalarWhereInput = {
    AND?: ResumeVersionScalarWhereInput | ResumeVersionScalarWhereInput[]
    OR?: ResumeVersionScalarWhereInput[]
    NOT?: ResumeVersionScalarWhereInput | ResumeVersionScalarWhereInput[]
    id?: UuidFilter<"ResumeVersion"> | string
    resumeId?: UuidFilter<"ResumeVersion"> | string
    versionNumber?: IntFilter<"ResumeVersion"> | number
    snapshot?: JsonFilter<"ResumeVersion">
    changeNote?: StringNullableFilter<"ResumeVersion"> | string | null
    createdAt?: DateTimeFilter<"ResumeVersion"> | Date | string
  }

  export type AIGenerationUpsertWithWhereUniqueWithoutResumeInput = {
    where: AIGenerationWhereUniqueInput
    update: XOR<AIGenerationUpdateWithoutResumeInput, AIGenerationUncheckedUpdateWithoutResumeInput>
    create: XOR<AIGenerationCreateWithoutResumeInput, AIGenerationUncheckedCreateWithoutResumeInput>
  }

  export type AIGenerationUpdateWithWhereUniqueWithoutResumeInput = {
    where: AIGenerationWhereUniqueInput
    data: XOR<AIGenerationUpdateWithoutResumeInput, AIGenerationUncheckedUpdateWithoutResumeInput>
  }

  export type AIGenerationUpdateManyWithWhereWithoutResumeInput = {
    where: AIGenerationScalarWhereInput
    data: XOR<AIGenerationUpdateManyMutationInput, AIGenerationUncheckedUpdateManyWithoutResumeInput>
  }

  export type ExportUpsertWithWhereUniqueWithoutResumeInput = {
    where: ExportWhereUniqueInput
    update: XOR<ExportUpdateWithoutResumeInput, ExportUncheckedUpdateWithoutResumeInput>
    create: XOR<ExportCreateWithoutResumeInput, ExportUncheckedCreateWithoutResumeInput>
  }

  export type ExportUpdateWithWhereUniqueWithoutResumeInput = {
    where: ExportWhereUniqueInput
    data: XOR<ExportUpdateWithoutResumeInput, ExportUncheckedUpdateWithoutResumeInput>
  }

  export type ExportUpdateManyWithWhereWithoutResumeInput = {
    where: ExportScalarWhereInput
    data: XOR<ExportUpdateManyMutationInput, ExportUncheckedUpdateManyWithoutResumeInput>
  }

  export type ResumeCreateWithoutVersionsInput = {
    id?: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    aiGenerations?: AIGenerationCreateNestedManyWithoutResumeInput
    exports?: ExportCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutVersionsInput = {
    id?: string
    userId: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiGenerations?: AIGenerationUncheckedCreateNestedManyWithoutResumeInput
    exports?: ExportUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutVersionsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
  }

  export type ResumeUpsertWithoutVersionsInput = {
    update: XOR<ResumeUpdateWithoutVersionsInput, ResumeUncheckedUpdateWithoutVersionsInput>
    create: XOR<ResumeCreateWithoutVersionsInput, ResumeUncheckedCreateWithoutVersionsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutVersionsInput, ResumeUncheckedUpdateWithoutVersionsInput>
  }

  export type ResumeUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    aiGenerations?: AIGenerationUpdateManyWithoutResumeNestedInput
    exports?: ExportUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerations?: AIGenerationUncheckedUpdateManyWithoutResumeNestedInput
    exports?: ExportUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type UserCreateWithoutAiGenerationsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    exports?: ExportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiGenerationsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    exports?: ExportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiGenerationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiGenerationsInput, UserUncheckedCreateWithoutAiGenerationsInput>
  }

  export type ResumeCreateWithoutAiGenerationsInput = {
    id?: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    exports?: ExportCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutAiGenerationsInput = {
    id?: string
    userId: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    exports?: ExportUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutAiGenerationsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutAiGenerationsInput, ResumeUncheckedCreateWithoutAiGenerationsInput>
  }

  export type UserUpsertWithoutAiGenerationsInput = {
    update: XOR<UserUpdateWithoutAiGenerationsInput, UserUncheckedUpdateWithoutAiGenerationsInput>
    create: XOR<UserCreateWithoutAiGenerationsInput, UserUncheckedCreateWithoutAiGenerationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiGenerationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiGenerationsInput, UserUncheckedUpdateWithoutAiGenerationsInput>
  }

  export type UserUpdateWithoutAiGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    exports?: ExportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    exports?: ExportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutAiGenerationsInput = {
    update: XOR<ResumeUpdateWithoutAiGenerationsInput, ResumeUncheckedUpdateWithoutAiGenerationsInput>
    create: XOR<ResumeCreateWithoutAiGenerationsInput, ResumeUncheckedCreateWithoutAiGenerationsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutAiGenerationsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutAiGenerationsInput, ResumeUncheckedUpdateWithoutAiGenerationsInput>
  }

  export type ResumeUpdateWithoutAiGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    exports?: ExportUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutAiGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    exports?: ExportUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type UserCreateWithoutExportsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    aiGenerations?: AIGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExportsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    aiGenerations?: AIGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExportsInput, UserUncheckedCreateWithoutExportsInput>
  }

  export type ResumeCreateWithoutExportsInput = {
    id?: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    versions?: ResumeVersionCreateNestedManyWithoutResumeInput
    aiGenerations?: AIGenerationCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutExportsInput = {
    id?: string
    userId: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ResumeVersionUncheckedCreateNestedManyWithoutResumeInput
    aiGenerations?: AIGenerationUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutExportsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutExportsInput, ResumeUncheckedCreateWithoutExportsInput>
  }

  export type UserUpsertWithoutExportsInput = {
    update: XOR<UserUpdateWithoutExportsInput, UserUncheckedUpdateWithoutExportsInput>
    create: XOR<UserCreateWithoutExportsInput, UserUncheckedCreateWithoutExportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExportsInput, UserUncheckedUpdateWithoutExportsInput>
  }

  export type UserUpdateWithoutExportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    aiGenerations?: AIGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    aiGenerations?: AIGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutExportsInput = {
    update: XOR<ResumeUpdateWithoutExportsInput, ResumeUncheckedUpdateWithoutExportsInput>
    create: XOR<ResumeCreateWithoutExportsInput, ResumeUncheckedCreateWithoutExportsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutExportsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutExportsInput, ResumeUncheckedUpdateWithoutExportsInput>
  }

  export type ResumeUpdateWithoutExportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    aiGenerations?: AIGenerationUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutExportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    aiGenerations?: AIGenerationUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyUserInput = {
    id?: string
    title: string
    slug: string
    templateKey?: string
    status?: $Enums.ResumeStatus
    personalInfo: JsonNullValueInput | InputJsonValue
    professionalSummary?: string | null
    education: JsonNullValueInput | InputJsonValue
    experience: JsonNullValueInput | InputJsonValue
    skills: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIGenerationCreateManyUserInput = {
    id?: string
    resumeId?: string | null
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText: string
    modelName?: string | null
    tokensUsed?: number | null
    isSavedToResume?: boolean
    createdAt?: Date | string
  }

  export type ExportCreateManyUserInput = {
    id?: string
    resumeId: string
    format?: $Enums.ExportFormat
    status?: $Enums.ExportStatus
    fileUrl?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUpdateManyWithoutResumeNestedInput
    aiGenerations?: AIGenerationUpdateManyWithoutResumeNestedInput
    exports?: ExportUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ResumeVersionUncheckedUpdateManyWithoutResumeNestedInput
    aiGenerations?: AIGenerationUncheckedUpdateManyWithoutResumeNestedInput
    exports?: ExportUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    status?: EnumResumeStatusFieldUpdateOperationsInput | $Enums.ResumeStatus
    personalInfo?: JsonNullValueInput | InputJsonValue
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    education?: JsonNullValueInput | InputJsonValue
    experience?: JsonNullValueInput | InputJsonValue
    skills?: JsonNullValueInput | InputJsonValue
    projects?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    languages?: NullableJsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    themeSettings?: NullableJsonNullValueInput | InputJsonValue
    customSections?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneWithoutAiGenerationsNestedInput
  }

  export type AIGenerationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutExportsNestedInput
  }

  export type ExportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionCreateManyResumeInput = {
    id?: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type AIGenerationCreateManyResumeInput = {
    id?: string
    userId: string
    generationType: $Enums.AIGenerationType
    inputPrompt: string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText: string
    modelName?: string | null
    tokensUsed?: number | null
    isSavedToResume?: boolean
    createdAt?: Date | string
  }

  export type ExportCreateManyResumeInput = {
    id?: string
    userId: string
    format?: $Enums.ExportFormat
    status?: $Enums.ExportStatus
    fileUrl?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type ResumeVersionUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeVersionUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiGenerationsNestedInput
  }

  export type AIGenerationUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    generationType?: EnumAIGenerationTypeFieldUpdateOperationsInput | $Enums.AIGenerationType
    inputPrompt?: StringFieldUpdateOperationsInput | string
    inputContext?: NullableJsonNullValueInput | InputJsonValue
    outputText?: StringFieldUpdateOperationsInput | string
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    tokensUsed?: NullableIntFieldUpdateOperationsInput | number | null
    isSavedToResume?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExportsNestedInput
  }

  export type ExportUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    format?: EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat
    status?: EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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