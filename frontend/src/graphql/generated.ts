import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  JSON: { input: any; output: any }
  PageSectionsDynamicZoneInput: { input: any; output: any }
  Upload: { input: any; output: any }
}

export type Address = {
  __typename?: 'Address'
  apartment?: Maybe<Scalars['String']['output']>
  city: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  house: Scalars['String']['output']
  order?: Maybe<OrderEntityResponse>
  postal_code: Scalars['String']['output']
  region: Scalars['String']['output']
  street: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>
}

export type AddressEntity = {
  __typename?: 'AddressEntity'
  attributes?: Maybe<Address>
  id?: Maybe<Scalars['ID']['output']>
}

export type AddressEntityResponse = {
  __typename?: 'AddressEntityResponse'
  data?: Maybe<AddressEntity>
}

export type AddressEntityResponseCollection = {
  __typename?: 'AddressEntityResponseCollection'
  data: Array<AddressEntity>
  meta: ResponseCollectionMeta
}

export type AddressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AddressFiltersInput>>>
  apartment?: InputMaybe<StringFilterInput>
  city?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  house?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<AddressFiltersInput>
  or?: InputMaybe<Array<InputMaybe<AddressFiltersInput>>>
  order?: InputMaybe<OrderFiltersInput>
  postal_code?: InputMaybe<StringFilterInput>
  region?: InputMaybe<StringFilterInput>
  street?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type AddressInput = {
  apartment?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  house?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Scalars['ID']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  region?: InputMaybe<Scalars['String']['input']>
  street?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>
}

export type AddressRelationResponseCollection = {
  __typename?: 'AddressRelationResponseCollection'
  data: Array<AddressEntity>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  contains?: InputMaybe<Scalars['Boolean']['input']>
  containsi?: InputMaybe<Scalars['Boolean']['input']>
  endsWith?: InputMaybe<Scalars['Boolean']['input']>
  eq?: InputMaybe<Scalars['Boolean']['input']>
  eqi?: InputMaybe<Scalars['Boolean']['input']>
  gt?: InputMaybe<Scalars['Boolean']['input']>
  gte?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  lt?: InputMaybe<Scalars['Boolean']['input']>
  lte?: InputMaybe<Scalars['Boolean']['input']>
  ne?: InputMaybe<Scalars['Boolean']['input']>
  nei?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']['input']>
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  startsWith?: InputMaybe<Scalars['Boolean']['input']>
}

export type Brand = {
  __typename?: 'Brand'
  categories?: Maybe<CategoryRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  image?: Maybe<UploadFileEntityResponse>
  name: Scalars['String']['output']
  products?: Maybe<ProductRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type BrandCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BrandProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BrandEntity = {
  __typename?: 'BrandEntity'
  attributes?: Maybe<Brand>
  id?: Maybe<Scalars['ID']['output']>
}

export type BrandEntityResponse = {
  __typename?: 'BrandEntityResponse'
  data?: Maybe<BrandEntity>
}

export type BrandEntityResponseCollection = {
  __typename?: 'BrandEntityResponseCollection'
  data: Array<BrandEntity>
  meta: ResponseCollectionMeta
}

export type BrandFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>
  categories?: InputMaybe<CategoryFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<BrandFiltersInput>
  or?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>
  products?: InputMaybe<ProductFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type BrandInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  image?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type BrandRelationResponseCollection = {
  __typename?: 'BrandRelationResponseCollection'
  data: Array<BrandEntity>
}

export type Category = {
  __typename?: 'Category'
  brands?: Maybe<BrandRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  image?: Maybe<UploadFileEntityResponse>
  name: Scalars['String']['output']
  products?: Maybe<ProductRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug?: Maybe<Scalars['String']['output']>
  sub_categories?: Maybe<SubCategoryRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type CategoryBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CategorySub_CategoriesArgs = {
  filters?: InputMaybe<SubCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CategoryEntity = {
  __typename?: 'CategoryEntity'
  attributes?: Maybe<Category>
  id?: Maybe<Scalars['ID']['output']>
}

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse'
  data?: Maybe<CategoryEntity>
}

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection'
  data: Array<CategoryEntity>
  meta: ResponseCollectionMeta
}

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  brands?: InputMaybe<BrandFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  products?: InputMaybe<ProductFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  sub_categories?: InputMaybe<SubCategoryFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CategoryInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  image?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  sub_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection'
  data: Array<CategoryEntity>
}

export type Collection = {
  __typename?: 'Collection'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  discount?: Maybe<Scalars['Float']['output']>
  icon?: Maybe<UploadFileEntityResponse>
  name: Scalars['String']['output']
  products?: Maybe<ProductRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type CollectionProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CollectionEntity = {
  __typename?: 'CollectionEntity'
  attributes?: Maybe<Collection>
  id?: Maybe<Scalars['ID']['output']>
}

export type CollectionEntityResponse = {
  __typename?: 'CollectionEntityResponse'
  data?: Maybe<CollectionEntity>
}

export type CollectionEntityResponseCollection = {
  __typename?: 'CollectionEntityResponseCollection'
  data: Array<CollectionEntity>
  meta: ResponseCollectionMeta
}

export type CollectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  discount?: InputMaybe<FloatFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CollectionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>
  products?: InputMaybe<ProductFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CollectionInput = {
  discount?: InputMaybe<Scalars['Float']['input']>
  icon?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CollectionRelationResponseCollection = {
  __typename?: 'CollectionRelationResponseCollection'
  data: Array<CollectionEntity>
}

export type Color = {
  __typename?: 'Color'
  color?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  products?: Maybe<ProductRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  sub_categories?: Maybe<SubCategoryRelationResponseCollection>
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ColorProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ColorSub_CategoriesArgs = {
  filters?: InputMaybe<SubCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ColorEntity = {
  __typename?: 'ColorEntity'
  attributes?: Maybe<Color>
  id?: Maybe<Scalars['ID']['output']>
}

export type ColorEntityResponse = {
  __typename?: 'ColorEntityResponse'
  data?: Maybe<ColorEntity>
}

export type ColorEntityResponseCollection = {
  __typename?: 'ColorEntityResponseCollection'
  data: Array<ColorEntity>
  meta: ResponseCollectionMeta
}

export type ColorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ColorFiltersInput>>>
  color?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<ColorFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ColorFiltersInput>>>
  products?: InputMaybe<ProductFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  sub_categories?: InputMaybe<SubCategoryFiltersInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ColorInput = {
  color?: InputMaybe<Scalars['String']['input']>
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  sub_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ColorRelationResponseCollection = {
  __typename?: 'ColorRelationResponseCollection'
  data: Array<ColorEntity>
}

export type Comment = {
  __typename?: 'Comment'
  content?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  rate: Scalars['Int']['output']
  sub_category?: Maybe<SubCategoryEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>
}

export type CommentEntity = {
  __typename?: 'CommentEntity'
  attributes?: Maybe<Comment>
  id?: Maybe<Scalars['ID']['output']>
}

export type CommentEntityResponse = {
  __typename?: 'CommentEntityResponse'
  data?: Maybe<CommentEntity>
}

export type CommentEntityResponseCollection = {
  __typename?: 'CommentEntityResponseCollection'
  data: Array<CommentEntity>
  meta: ResponseCollectionMeta
}

export type CommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<CommentFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  rate?: InputMaybe<IntFilterInput>
  sub_category?: InputMaybe<SubCategoryFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type CommentInput = {
  content?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  rate?: InputMaybe<Scalars['Int']['input']>
  sub_category?: InputMaybe<Scalars['ID']['input']>
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>
}

export type CommentRelationResponseCollection = {
  __typename?: 'CommentRelationResponseCollection'
  data: Array<CommentEntity>
}

export type ComponentElementCartItem = {
  __typename?: 'ComponentElementCartItem'
  id: Scalars['ID']['output']
  product?: Maybe<ProductEntityResponse>
  quantity: Scalars['Int']['output']
}

export type ComponentElementCartItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementCartItemFiltersInput>>>
  not?: InputMaybe<ComponentElementCartItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentElementCartItemFiltersInput>>>
  product?: InputMaybe<ProductFiltersInput>
  quantity?: InputMaybe<IntFilterInput>
}

export type ComponentElementCartItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  product?: InputMaybe<Scalars['ID']['input']>
  quantity?: InputMaybe<Scalars['Int']['input']>
}

export type ComponentElementSlidePromo = {
  __typename?: 'ComponentElementSlidePromo'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  image?: Maybe<UploadFileEntityResponse>
  link?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentElementSlidePromoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementSlidePromoFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  link?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentElementSlidePromoFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentElementSlidePromoFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentSectionCategories = {
  __typename?: 'ComponentSectionCategories'
  categories?: Maybe<CategoryRelationResponseCollection>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentSectionCategoriesCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionHeader = {
  __typename?: 'ComponentSectionHeader'
  id: Scalars['ID']['output']
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentSectionRichText = {
  __typename?: 'ComponentSectionRichText'
  content?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
}

export type ComponentSectionSliderCollection = {
  __typename?: 'ComponentSectionSliderCollection'
  collection?: Maybe<CollectionEntityResponse>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentSectionSliderCollectionFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentSectionSliderCollectionFiltersInput>>
  >
  collection?: InputMaybe<CollectionFiltersInput>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSectionSliderCollectionFiltersInput>
  or?: InputMaybe<
    Array<InputMaybe<ComponentSectionSliderCollectionFiltersInput>>
  >
  title?: InputMaybe<StringFilterInput>
}

export type ComponentSectionSliderCollectionInput = {
  collection?: InputMaybe<Scalars['ID']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentSectionSliderPromo = {
  __typename?: 'ComponentSectionSliderPromo'
  id: Scalars['ID']['output']
  slide?: Maybe<Array<Maybe<ComponentElementSlidePromo>>>
}

export type ComponentSectionSliderPromoSlideArgs = {
  filters?: InputMaybe<ComponentElementSlidePromoFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSharedLink = {
  __typename?: 'ComponentSharedLink'
  id: Scalars['ID']['output']
  title: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type ComponentSharedLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedLinkFiltersInput>>>
  not?: InputMaybe<ComponentSharedLinkFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedLinkFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
  url?: InputMaybe<StringFilterInput>
}

export type ComponentSharedLinkInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial'
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  image?: Maybe<UploadFileEntityResponse>
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork
  title: Scalars['String']['output']
}

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  socialNetwork?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<Scalars['ID']['input']>
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo'
  canonicalURL?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  keywords?: Maybe<Scalars['String']['output']>
  metaDescription: Scalars['String']['output']
  metaImage?: Maybe<UploadFileEntityResponse>
  metaRobots?: Maybe<Scalars['String']['output']>
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>
  metaTitle: Scalars['String']['output']
  metaViewport?: Maybe<Scalars['String']['output']>
  structuredData?: Maybe<Scalars['JSON']['output']>
}

export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
  canonicalURL?: InputMaybe<StringFilterInput>
  keywords?: InputMaybe<StringFilterInput>
  metaDescription?: InputMaybe<StringFilterInput>
  metaRobots?: InputMaybe<StringFilterInput>
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  metaTitle?: InputMaybe<StringFilterInput>
  metaViewport?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedSeoFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
  structuredData?: InputMaybe<JsonFilterInput>
}

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  keywords?: InputMaybe<Scalars['String']['input']>
  metaDescription?: InputMaybe<Scalars['String']['input']>
  metaImage?: InputMaybe<Scalars['ID']['input']>
  metaRobots?: InputMaybe<Scalars['String']['input']>
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>
  metaTitle?: InputMaybe<Scalars['String']['input']>
  metaViewport?: InputMaybe<Scalars['String']['input']>
  structuredData?: InputMaybe<Scalars['JSON']['input']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  contains?: InputMaybe<Scalars['DateTime']['input']>
  containsi?: InputMaybe<Scalars['DateTime']['input']>
  endsWith?: InputMaybe<Scalars['DateTime']['input']>
  eq?: InputMaybe<Scalars['DateTime']['input']>
  eqi?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  ne?: InputMaybe<Scalars['DateTime']['input']>
  nei?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']['input']>
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startsWith?: InputMaybe<Scalars['DateTime']['input']>
}

export type Delivery = {
  __typename?: 'Delivery'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  price: Scalars['Int']['output']
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type DeliveryEntity = {
  __typename?: 'DeliveryEntity'
  attributes?: Maybe<Delivery>
  id?: Maybe<Scalars['ID']['output']>
}

export type DeliveryEntityResponse = {
  __typename?: 'DeliveryEntityResponse'
  data?: Maybe<DeliveryEntity>
}

export type DeliveryEntityResponseCollection = {
  __typename?: 'DeliveryEntityResponseCollection'
  data: Array<DeliveryEntity>
  meta: ResponseCollectionMeta
}

export type DeliveryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DeliveryFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<DeliveryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<DeliveryFiltersInput>>>
  price?: InputMaybe<IntFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type DeliveryInput = {
  description?: InputMaybe<Scalars['String']['input']>
  price?: InputMaybe<Scalars['Int']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
}

export enum Enum_Order_Status {
  Closed = 'closed',
  Pending = 'pending',
  Processing = 'processing',
  Shipped = 'shipped',
}

export type Error = {
  __typename?: 'Error'
  code: Scalars['String']['output']
  message?: Maybe<Scalars['String']['output']>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  contains?: InputMaybe<Scalars['Float']['input']>
  containsi?: InputMaybe<Scalars['Float']['input']>
  endsWith?: InputMaybe<Scalars['Float']['input']>
  eq?: InputMaybe<Scalars['Float']['input']>
  eqi?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  ne?: InputMaybe<Scalars['Float']['input']>
  nei?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']['input']>
  notContainsi?: InputMaybe<Scalars['Float']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  startsWith?: InputMaybe<Scalars['Float']['input']>
}

export type GenericMorph =
  | Address
  | Brand
  | Category
  | Collection
  | Color
  | Comment
  | ComponentElementCartItem
  | ComponentElementSlidePromo
  | ComponentSectionCategories
  | ComponentSectionHeader
  | ComponentSectionRichText
  | ComponentSectionSliderCollection
  | ComponentSectionSliderPromo
  | ComponentSharedLink
  | ComponentSharedMetaSocial
  | ComponentSharedSeo
  | Delivery
  | Global
  | I18NLocale
  | Memory
  | Order
  | Page
  | Product
  | SubCategory
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type Global = {
  __typename?: 'Global'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  menu?: Maybe<Array<Maybe<ComponentSharedLink>>>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  seo?: Maybe<ComponentSharedSeo>
  service?: Maybe<Array<Maybe<ComponentSharedLink>>>
  social?: Maybe<Array<Maybe<ComponentSharedLink>>>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type GlobalMenuArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GlobalServiceArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GlobalSocialArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GlobalEntity = {
  __typename?: 'GlobalEntity'
  attributes?: Maybe<Global>
  id?: Maybe<Scalars['ID']['output']>
}

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse'
  data?: Maybe<GlobalEntity>
}

export type GlobalInput = {
  menu?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  seo?: InputMaybe<ComponentSharedSeoInput>
  service?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>
  social?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  name?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']['output']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  contains?: InputMaybe<Scalars['ID']['input']>
  containsi?: InputMaybe<Scalars['ID']['input']>
  endsWith?: InputMaybe<Scalars['ID']['input']>
  eq?: InputMaybe<Scalars['ID']['input']>
  eqi?: InputMaybe<Scalars['ID']['input']>
  gt?: InputMaybe<Scalars['ID']['input']>
  gte?: InputMaybe<Scalars['ID']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  lt?: InputMaybe<Scalars['ID']['input']>
  lte?: InputMaybe<Scalars['ID']['input']>
  ne?: InputMaybe<Scalars['ID']['input']>
  nei?: InputMaybe<Scalars['ID']['input']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']['input']>
  notContainsi?: InputMaybe<Scalars['ID']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  startsWith?: InputMaybe<Scalars['ID']['input']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  contains?: InputMaybe<Scalars['Int']['input']>
  containsi?: InputMaybe<Scalars['Int']['input']>
  endsWith?: InputMaybe<Scalars['Int']['input']>
  eq?: InputMaybe<Scalars['Int']['input']>
  eqi?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  nei?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']['input']>
  notContainsi?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  startsWith?: InputMaybe<Scalars['Int']['input']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  contains?: InputMaybe<Scalars['JSON']['input']>
  containsi?: InputMaybe<Scalars['JSON']['input']>
  endsWith?: InputMaybe<Scalars['JSON']['input']>
  eq?: InputMaybe<Scalars['JSON']['input']>
  eqi?: InputMaybe<Scalars['JSON']['input']>
  gt?: InputMaybe<Scalars['JSON']['input']>
  gte?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  lt?: InputMaybe<Scalars['JSON']['input']>
  lte?: InputMaybe<Scalars['JSON']['input']>
  ne?: InputMaybe<Scalars['JSON']['input']>
  nei?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']['input']>
  notContainsi?: InputMaybe<Scalars['JSON']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  startsWith?: InputMaybe<Scalars['JSON']['input']>
}

export type Memory = {
  __typename?: 'Memory'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  products?: Maybe<ProductRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  sub_categories?: Maybe<SubCategoryRelationResponseCollection>
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  value: Scalars['Int']['output']
}

export type MemoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MemorySub_CategoriesArgs = {
  filters?: InputMaybe<SubCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MemoryEntity = {
  __typename?: 'MemoryEntity'
  attributes?: Maybe<Memory>
  id?: Maybe<Scalars['ID']['output']>
}

export type MemoryEntityResponse = {
  __typename?: 'MemoryEntityResponse'
  data?: Maybe<MemoryEntity>
}

export type MemoryEntityResponseCollection = {
  __typename?: 'MemoryEntityResponseCollection'
  data: Array<MemoryEntity>
  meta: ResponseCollectionMeta
}

export type MemoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MemoryFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<MemoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<MemoryFiltersInput>>>
  products?: InputMaybe<ProductFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  sub_categories?: InputMaybe<SubCategoryFiltersInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  value?: InputMaybe<IntFilterInput>
}

export type MemoryInput = {
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  sub_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  title?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['Int']['input']>
}

export type MemoryRelationResponseCollection = {
  __typename?: 'MemoryRelationResponseCollection'
  data: Array<MemoryEntity>
}

export type Mutation = {
  __typename?: 'Mutation'
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createAddress?: Maybe<AddressEntityResponse>
  createBrand?: Maybe<BrandEntityResponse>
  createCategory?: Maybe<CategoryEntityResponse>
  createCollection?: Maybe<CollectionEntityResponse>
  createColor?: Maybe<ColorEntityResponse>
  createComment?: Maybe<CommentEntityResponse>
  createDelivery?: Maybe<DeliveryEntityResponse>
  createMemory?: Maybe<MemoryEntityResponse>
  createOrder?: Maybe<OrderEntityResponse>
  createPage?: Maybe<PageEntityResponse>
  createProduct?: Maybe<ProductEntityResponse>
  createSubCategory?: Maybe<SubCategoryEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteAddress?: Maybe<AddressEntityResponse>
  deleteBrand?: Maybe<BrandEntityResponse>
  deleteCategory?: Maybe<CategoryEntityResponse>
  deleteCollection?: Maybe<CollectionEntityResponse>
  deleteColor?: Maybe<ColorEntityResponse>
  deleteComment?: Maybe<CommentEntityResponse>
  deleteDelivery?: Maybe<DeliveryEntityResponse>
  deleteGlobal?: Maybe<GlobalEntityResponse>
  deleteMemory?: Maybe<MemoryEntityResponse>
  deleteOrder?: Maybe<OrderEntityResponse>
  deletePage?: Maybe<PageEntityResponse>
  deleteProduct?: Maybe<ProductEntityResponse>
  deleteSubCategory?: Maybe<SubCategoryEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateAddress?: Maybe<AddressEntityResponse>
  updateBrand?: Maybe<BrandEntityResponse>
  updateCategory?: Maybe<CategoryEntityResponse>
  updateCollection?: Maybe<CollectionEntityResponse>
  updateColor?: Maybe<ColorEntityResponse>
  updateComment?: Maybe<CommentEntityResponse>
  updateDelivery?: Maybe<DeliveryEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateGlobal?: Maybe<GlobalEntityResponse>
  updateMemory?: Maybe<MemoryEntityResponse>
  updateOrder?: Maybe<OrderEntityResponse>
  updatePage?: Maybe<PageEntityResponse>
  updateProduct?: Maybe<ProductEntityResponse>
  updateSubCategory?: Maybe<SubCategoryEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationCreateAddressArgs = {
  data: AddressInput
}

export type MutationCreateBrandArgs = {
  data: BrandInput
}

export type MutationCreateCategoryArgs = {
  data: CategoryInput
}

export type MutationCreateCollectionArgs = {
  data: CollectionInput
}

export type MutationCreateColorArgs = {
  data: ColorInput
}

export type MutationCreateCommentArgs = {
  data: CommentInput
}

export type MutationCreateDeliveryArgs = {
  data: DeliveryInput
}

export type MutationCreateMemoryArgs = {
  data: MemoryInput
}

export type MutationCreateOrderArgs = {
  data: OrderInput
}

export type MutationCreatePageArgs = {
  data: PageInput
}

export type MutationCreateProductArgs = {
  data: ProductInput
}

export type MutationCreateSubCategoryArgs = {
  data: SubCategoryInput
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteAddressArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteBrandArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteColorArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteDeliveryArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteMemoryArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePageArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteSubCategoryArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  files: Array<InputMaybe<Scalars['Upload']['input']>>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationUpdateAddressArgs = {
  data: AddressInput
  id: Scalars['ID']['input']
}

export type MutationUpdateBrandArgs = {
  data: BrandInput
  id: Scalars['ID']['input']
}

export type MutationUpdateCategoryArgs = {
  data: CategoryInput
  id: Scalars['ID']['input']
}

export type MutationUpdateCollectionArgs = {
  data: CollectionInput
  id: Scalars['ID']['input']
}

export type MutationUpdateColorArgs = {
  data: ColorInput
  id: Scalars['ID']['input']
}

export type MutationUpdateCommentArgs = {
  data: CommentInput
  id: Scalars['ID']['input']
}

export type MutationUpdateDeliveryArgs = {
  data: DeliveryInput
  id: Scalars['ID']['input']
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateGlobalArgs = {
  data: GlobalInput
}

export type MutationUpdateMemoryArgs = {
  data: MemoryInput
  id: Scalars['ID']['input']
}

export type MutationUpdateOrderArgs = {
  data: OrderInput
  id: Scalars['ID']['input']
}

export type MutationUpdatePageArgs = {
  data: PageInput
  id: Scalars['ID']['input']
}

export type MutationUpdateProductArgs = {
  data: ProductInput
  id: Scalars['ID']['input']
}

export type MutationUpdateSubCategoryArgs = {
  data: SubCategoryInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']['input']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  file: Scalars['Upload']['input']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type Order = {
  __typename?: 'Order'
  address?: Maybe<AddressEntityResponse>
  cart?: Maybe<Array<Maybe<ComponentElementCartItem>>>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  delivery?: Maybe<DeliveryEntityResponse>
  status?: Maybe<Enum_Order_Status>
  total_price?: Maybe<Scalars['Int']['output']>
  total_quantity?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>
}

export type OrderCartArgs = {
  filters?: InputMaybe<ComponentElementCartItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type OrderEntity = {
  __typename?: 'OrderEntity'
  attributes?: Maybe<Order>
  id?: Maybe<Scalars['ID']['output']>
}

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse'
  data?: Maybe<OrderEntity>
}

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection'
  data: Array<OrderEntity>
  meta: ResponseCollectionMeta
}

export type OrderFiltersInput = {
  address?: InputMaybe<AddressFiltersInput>
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>
  cart?: InputMaybe<ComponentElementCartItemFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  delivery?: InputMaybe<DeliveryFiltersInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<OrderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>
  status?: InputMaybe<StringFilterInput>
  total_price?: InputMaybe<IntFilterInput>
  total_quantity?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type OrderInput = {
  address?: InputMaybe<Scalars['ID']['input']>
  cart?: InputMaybe<Array<InputMaybe<ComponentElementCartItemInput>>>
  delivery?: InputMaybe<Scalars['ID']['input']>
  status?: InputMaybe<Enum_Order_Status>
  total_price?: InputMaybe<Scalars['Int']['input']>
  total_quantity?: InputMaybe<Scalars['Int']['input']>
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>
}

export type OrderRelationResponseCollection = {
  __typename?: 'OrderRelationResponseCollection'
  data: Array<OrderEntity>
}

export type Page = {
  __typename?: 'Page'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>
  seo?: Maybe<ComponentSharedSeo>
  slug?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type PageEntity = {
  __typename?: 'PageEntity'
  attributes?: Maybe<Page>
  id?: Maybe<Scalars['ID']['output']>
}

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse'
  data?: Maybe<PageEntity>
}

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection'
  data: Array<PageEntity>
  meta: ResponseCollectionMeta
}

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<PageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  sections?: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']['input']>>
  seo?: InputMaybe<ComponentSharedSeoInput>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type PageSectionsDynamicZone =
  | ComponentSectionCategories
  | ComponentSectionHeader
  | ComponentSectionRichText
  | ComponentSectionSliderCollection
  | ComponentSectionSliderPromo
  | Error

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']['output']
  pageCount: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  start?: InputMaybe<Scalars['Int']['input']>
}

export type Product = {
  __typename?: 'Product'
  brand?: Maybe<BrandEntityResponse>
  category?: Maybe<CategoryEntityResponse>
  collections?: Maybe<CollectionRelationResponseCollection>
  color?: Maybe<ColorEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  image: UploadFileRelationResponseCollection
  memory?: Maybe<MemoryEntityResponse>
  name: Scalars['String']['output']
  price?: Maybe<Scalars['Int']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  rating?: Maybe<Scalars['Float']['output']>
  slug?: Maybe<Scalars['String']['output']>
  sub_category?: Maybe<SubCategoryEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ProductCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProductImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProductEntity = {
  __typename?: 'ProductEntity'
  attributes?: Maybe<Product>
  id?: Maybe<Scalars['ID']['output']>
}

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse'
  data?: Maybe<ProductEntity>
}

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection'
  data: Array<ProductEntity>
  meta: ResponseCollectionMeta
}

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>
  brand?: InputMaybe<BrandFiltersInput>
  category?: InputMaybe<CategoryFiltersInput>
  collections?: InputMaybe<CollectionFiltersInput>
  color?: InputMaybe<ColorFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  memory?: InputMaybe<MemoryFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ProductFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>
  price?: InputMaybe<IntFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  rating?: InputMaybe<FloatFilterInput>
  slug?: InputMaybe<StringFilterInput>
  sub_category?: InputMaybe<SubCategoryFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ProductInput = {
  brand?: InputMaybe<Scalars['ID']['input']>
  category?: InputMaybe<Scalars['ID']['input']>
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  color?: InputMaybe<Scalars['ID']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  memory?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  price?: InputMaybe<Scalars['Int']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  rating?: InputMaybe<Scalars['Float']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  sub_category?: InputMaybe<Scalars['ID']['input']>
}

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection'
  data: Array<ProductEntity>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  address?: Maybe<AddressEntityResponse>
  addresses?: Maybe<AddressEntityResponseCollection>
  brand?: Maybe<BrandEntityResponse>
  brands?: Maybe<BrandEntityResponseCollection>
  categories?: Maybe<CategoryEntityResponseCollection>
  category?: Maybe<CategoryEntityResponse>
  collection?: Maybe<CollectionEntityResponse>
  collections?: Maybe<CollectionEntityResponseCollection>
  color?: Maybe<ColorEntityResponse>
  colors?: Maybe<ColorEntityResponseCollection>
  comment?: Maybe<CommentEntityResponse>
  comments?: Maybe<CommentEntityResponseCollection>
  deliveries?: Maybe<DeliveryEntityResponseCollection>
  delivery?: Maybe<DeliveryEntityResponse>
  global?: Maybe<GlobalEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  memories?: Maybe<MemoryEntityResponseCollection>
  memory?: Maybe<MemoryEntityResponse>
  order?: Maybe<OrderEntityResponse>
  orders?: Maybe<OrderEntityResponseCollection>
  page?: Maybe<PageEntityResponse>
  pages?: Maybe<PageEntityResponseCollection>
  product?: Maybe<ProductEntityResponse>
  products?: Maybe<ProductEntityResponseCollection>
  subCategories?: Maybe<SubCategoryEntityResponseCollection>
  subCategory?: Maybe<SubCategoryEntityResponse>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryAddressArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryAddressesArgs = {
  filters?: InputMaybe<AddressFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryBrandArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryColorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryColorsArgs = {
  filters?: InputMaybe<ColorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryDeliveriesArgs = {
  filters?: InputMaybe<DeliveryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryDeliveryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryGlobalArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMemoriesArgs = {
  filters?: InputMaybe<MemoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMemoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySubCategoriesArgs = {
  filters?: InputMaybe<SubCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySubCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  containsi?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  eq?: InputMaybe<Scalars['String']['input']>
  eqi?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  nei?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']['input']>
  notContainsi?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type SubCategory = {
  __typename?: 'SubCategory'
  category?: Maybe<CategoryEntityResponse>
  colors?: Maybe<ColorRelationResponseCollection>
  comments?: Maybe<CommentRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  memories?: Maybe<MemoryRelationResponseCollection>
  name?: Maybe<Scalars['String']['output']>
  products?: Maybe<ProductRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slider?: Maybe<ComponentSectionSliderCollection>
  slug?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type SubCategoryColorsArgs = {
  filters?: InputMaybe<ColorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SubCategoryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SubCategoryMemoriesArgs = {
  filters?: InputMaybe<MemoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SubCategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SubCategoryEntity = {
  __typename?: 'SubCategoryEntity'
  attributes?: Maybe<SubCategory>
  id?: Maybe<Scalars['ID']['output']>
}

export type SubCategoryEntityResponse = {
  __typename?: 'SubCategoryEntityResponse'
  data?: Maybe<SubCategoryEntity>
}

export type SubCategoryEntityResponseCollection = {
  __typename?: 'SubCategoryEntityResponseCollection'
  data: Array<SubCategoryEntity>
  meta: ResponseCollectionMeta
}

export type SubCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SubCategoryFiltersInput>>>
  category?: InputMaybe<CategoryFiltersInput>
  colors?: InputMaybe<ColorFiltersInput>
  comments?: InputMaybe<CommentFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  memories?: InputMaybe<MemoryFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<SubCategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<SubCategoryFiltersInput>>>
  products?: InputMaybe<ProductFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slider?: InputMaybe<ComponentSectionSliderCollectionFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type SubCategoryInput = {
  category?: InputMaybe<Scalars['ID']['input']>
  colors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  memories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slider?: InputMaybe<ComponentSectionSliderCollectionInput>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type SubCategoryRelationResponseCollection = {
  __typename?: 'SubCategoryRelationResponseCollection'
  data: Array<SubCategoryEntity>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']['output']>
  caption?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  ext?: Maybe<Scalars['String']['output']>
  formats?: Maybe<Scalars['JSON']['output']>
  hash: Scalars['String']['output']
  height?: Maybe<Scalars['Int']['output']>
  mime: Scalars['String']['output']
  name: Scalars['String']['output']
  previewUrl?: Maybe<Scalars['String']['output']>
  provider: Scalars['String']['output']
  provider_metadata?: Maybe<Scalars['JSON']['output']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  url: Scalars['String']['output']
  width?: Maybe<Scalars['Int']['output']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  ext?: InputMaybe<Scalars['String']['input']>
  folder?: InputMaybe<Scalars['ID']['input']>
  folderPath?: InputMaybe<Scalars['String']['input']>
  formats?: InputMaybe<Scalars['JSON']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  mime?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  previewUrl?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  __typename?: 'UploadFolder'
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']['output']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']['output']
  pathId: Scalars['Int']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity'
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse'
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection'
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Scalars['ID']['input']>
  path?: InputMaybe<Scalars['String']['input']>
  pathId?: InputMaybe<Scalars['Int']['input']>
}

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection'
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input']
  password: Scalars['String']['input']
  provider?: Scalars['String']['input']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']['output']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']['output']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  type?: Maybe<Scalars['String']['output']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  type?: InputMaybe<Scalars['String']['input']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  addresses?: Maybe<AddressRelationResponseCollection>
  avatar?: Maybe<UploadFileEntityResponse>
  blocked?: Maybe<Scalars['Boolean']['output']>
  comments?: Maybe<CommentRelationResponseCollection>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email: Scalars['String']['output']
  orders?: Maybe<OrderRelationResponseCollection>
  provider?: Maybe<Scalars['String']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username: Scalars['String']['output']
}

export type UsersPermissionsUserAddressesArgs = {
  filters?: InputMaybe<AddressFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsUserCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsUserOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  addresses?: InputMaybe<AddressFiltersInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  comments?: InputMaybe<CommentFiltersInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  orders?: InputMaybe<OrderFiltersInput>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  addresses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  avatar?: InputMaybe<Scalars['ID']['input']>
  blocked?: InputMaybe<Scalars['Boolean']['input']>
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  confirmationToken?: InputMaybe<Scalars['String']['input']>
  confirmed?: InputMaybe<Scalars['Boolean']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  password?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

export type AddressFragment = {
  __typename?: 'Address'
  title: string
  region: string
  city: string
  street: string
  house: string
  apartment?: string | null
  postal_code: string
  updatedAt?: any | null
  users_permissions_user?: {
    __typename?: 'UsersPermissionsUserEntityResponse'
    data?: {
      __typename?: 'UsersPermissionsUserEntity'
      id?: string | null
    } | null
  } | null
}

export type CategoriesFragment = {
  __typename?: 'ComponentSectionCategories'
  id: string
  title?: string | null
  description?: string | null
  categories?: {
    __typename?: 'CategoryRelationResponseCollection'
    data: Array<{
      __typename?: 'CategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Category'
        name: string
        slug?: string | null
        image?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              name: string
              alternativeText?: string | null
              width?: number | null
              height?: number | null
              url: string
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type CollectionFragment = {
  __typename?: 'Collection'
  name: string
  discount?: number | null
  icon?: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      attributes?: {
        __typename?: 'UploadFile'
        name: string
        alternativeText?: string | null
        width?: number | null
        height?: number | null
        url: string
      } | null
    } | null
  } | null
}

export type HeaderFragment = {
  __typename?: 'ComponentSectionHeader'
  id: string
  title?: string | null
}

export type ImageFragment = {
  __typename?: 'UploadFile'
  name: string
  alternativeText?: string | null
  width?: number | null
  height?: number | null
  url: string
}

export type LinkFragment = {
  __typename?: 'ComponentSharedLink'
  id: string
  title: string
  url: string
}

export type ProductFragment = {
  __typename?: 'Product'
  name: string
  slug?: string | null
  description?: string | null
  price?: number | null
  rating?: number | null
  image: {
    __typename?: 'UploadFileRelationResponseCollection'
    data: Array<{
      __typename?: 'UploadFileEntity'
      attributes?: {
        __typename?: 'UploadFile'
        name: string
        alternativeText?: string | null
        width?: number | null
        height?: number | null
        url: string
      } | null
    }>
  }
  collections?: {
    __typename?: 'CollectionRelationResponseCollection'
    data: Array<{
      __typename?: 'CollectionEntity'
      attributes?: {
        __typename?: 'Collection'
        name: string
        discount?: number | null
        icon?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              name: string
              alternativeText?: string | null
              width?: number | null
              height?: number | null
              url: string
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
  color?: {
    __typename?: 'ColorEntityResponse'
    data?: {
      __typename?: 'ColorEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Color'
        title: string
        color?: string | null
      } | null
    } | null
  } | null
  memory?: {
    __typename?: 'MemoryEntityResponse'
    data?: {
      __typename?: 'MemoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Memory'
        value: number
        title: string
      } | null
    } | null
  } | null
  brand?: {
    __typename?: 'BrandEntityResponse'
    data?: { __typename?: 'BrandEntity'; id?: string | null } | null
  } | null
  category?: {
    __typename?: 'CategoryEntityResponse'
    data?: { __typename?: 'CategoryEntity'; id?: string | null } | null
  } | null
  sub_category?: {
    __typename?: 'SubCategoryEntityResponse'
    data?: {
      __typename?: 'SubCategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'SubCategory'
        colors?: {
          __typename?: 'ColorRelationResponseCollection'
          data: Array<{
            __typename?: 'ColorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Color'
              title: string
              color?: string | null
            } | null
          }>
        } | null
        memories?: {
          __typename?: 'MemoryRelationResponseCollection'
          data: Array<{
            __typename?: 'MemoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Memory'
              title: string
              value: number
            } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type PromoSliderFragment = {
  __typename?: 'ComponentSectionSliderPromo'
  id: string
  slide?: Array<{
    __typename?: 'ComponentElementSlidePromo'
    id: string
    title?: string | null
    description?: string | null
    link?: string | null
    image?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          name: string
          alternativeText?: string | null
          width?: number | null
          height?: number | null
          url: string
        } | null
      } | null
    } | null
  } | null> | null
}

export type RichTextFragment = {
  __typename?: 'ComponentSectionRichText'
  id: string
  content?: string | null
}

export type SeoFragment = {
  __typename?: 'ComponentSharedSeo'
  metaTitle: string
  metaDescription: string
  keywords?: string | null
  metaImage?: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        name: string
        alternativeText?: string | null
        width?: number | null
        height?: number | null
        url: string
      } | null
    } | null
  } | null
  metaSocial?: Array<{
    __typename?: 'ComponentSharedMetaSocial'
    socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork
    title: string
    description: string
    image?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        attributes?: {
          __typename?: 'UploadFile'
          name: string
          alternativeText?: string | null
          width?: number | null
          height?: number | null
          url: string
        } | null
      } | null
    } | null
  } | null> | null
}

export type SliderCollectionFragment = {
  __typename?: 'ComponentSectionSliderCollection'
  id: string
  title?: string | null
  description?: string | null
  collection?: {
    __typename?: 'CollectionEntityResponse'
    data?: {
      __typename?: 'CollectionEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Collection'
        name: string
        discount?: number | null
        products?: {
          __typename?: 'ProductRelationResponseCollection'
          data: Array<{
            __typename?: 'ProductEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Product'
              name: string
              slug?: string | null
              description?: string | null
              price?: number | null
              rating?: number | null
              image: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  attributes?: {
                    __typename?: 'UploadFile'
                    name: string
                    alternativeText?: string | null
                    width?: number | null
                    height?: number | null
                    url: string
                  } | null
                }>
              }
              collections?: {
                __typename?: 'CollectionRelationResponseCollection'
                data: Array<{
                  __typename?: 'CollectionEntity'
                  attributes?: {
                    __typename?: 'Collection'
                    name: string
                    discount?: number | null
                    icon?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        attributes?: {
                          __typename?: 'UploadFile'
                          name: string
                          alternativeText?: string | null
                          width?: number | null
                          height?: number | null
                          url: string
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
              color?: {
                __typename?: 'ColorEntityResponse'
                data?: {
                  __typename?: 'ColorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Color'
                    title: string
                    color?: string | null
                  } | null
                } | null
              } | null
              memory?: {
                __typename?: 'MemoryEntityResponse'
                data?: {
                  __typename?: 'MemoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Memory'
                    value: number
                    title: string
                  } | null
                } | null
              } | null
              brand?: {
                __typename?: 'BrandEntityResponse'
                data?: { __typename?: 'BrandEntity'; id?: string | null } | null
              } | null
              category?: {
                __typename?: 'CategoryEntityResponse'
                data?: {
                  __typename?: 'CategoryEntity'
                  id?: string | null
                } | null
              } | null
              sub_category?: {
                __typename?: 'SubCategoryEntityResponse'
                data?: {
                  __typename?: 'SubCategoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'SubCategory'
                    colors?: {
                      __typename?: 'ColorRelationResponseCollection'
                      data: Array<{
                        __typename?: 'ColorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Color'
                          title: string
                          color?: string | null
                        } | null
                      }>
                    } | null
                    memories?: {
                      __typename?: 'MemoryRelationResponseCollection'
                      data: Array<{
                        __typename?: 'MemoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Memory'
                          title: string
                          value: number
                        } | null
                      }>
                    } | null
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
        icon?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              name: string
              alternativeText?: string | null
              width?: number | null
              height?: number | null
              url: string
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type CreateAddressMutationVariables = Exact<{
  region?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  street?: InputMaybe<Scalars['String']['input']>
  house?: InputMaybe<Scalars['String']['input']>
  apartment?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>
  order?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}>

export type CreateAddressMutation = {
  __typename?: 'Mutation'
  createAddress?: {
    __typename?: 'AddressEntityResponse'
    data?: {
      __typename?: 'AddressEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Address'
        title: string
        region: string
        city: string
        street: string
        house: string
        apartment?: string | null
        postal_code: string
        updatedAt?: any | null
        users_permissions_user?: {
          __typename?: 'UsersPermissionsUserEntityResponse'
          data?: {
            __typename?: 'UsersPermissionsUserEntity'
            id?: string | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type DeleteAddressMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type DeleteAddressMutation = {
  __typename?: 'Mutation'
  deleteAddress?: {
    __typename?: 'AddressEntityResponse'
    data?: { __typename?: 'AddressEntity'; id?: string | null } | null
  } | null
}

export type UpdateAddressMutationVariables = Exact<{
  id: Scalars['ID']['input']
  region?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  street?: InputMaybe<Scalars['String']['input']>
  house?: InputMaybe<Scalars['String']['input']>
  apartment?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>
  order?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}>

export type UpdateAddressMutation = {
  __typename?: 'Mutation'
  updateAddress?: {
    __typename?: 'AddressEntityResponse'
    data?: {
      __typename?: 'AddressEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Address'
        title: string
        region: string
        city: string
        street: string
        house: string
        apartment?: string | null
        postal_code: string
        updatedAt?: any | null
        users_permissions_user?: {
          __typename?: 'UsersPermissionsUserEntityResponse'
          data?: {
            __typename?: 'UsersPermissionsUserEntity'
            id?: string | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'UsersPermissionsLoginPayload'
    jwt?: string | null
    user: {
      __typename?: 'UsersPermissionsMe'
      id: string
      username: string
      email?: string | null
      confirmed?: boolean | null
      blocked?: boolean | null
    }
  }
}

export type RegisterMutationVariables = Exact<{
  username: Scalars['String']['input']
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type RegisterMutation = {
  __typename?: 'Mutation'
  register: {
    __typename?: 'UsersPermissionsLoginPayload'
    jwt?: string | null
    user: {
      __typename?: 'UsersPermissionsMe'
      id: string
      username: string
      email?: string | null
      confirmed?: boolean | null
      blocked?: boolean | null
      role?: {
        __typename?: 'UsersPermissionsMeRole'
        id: string
        name: string
        description?: string | null
        type?: string | null
      } | null
    }
  }
}

export type CreateCommentMutationVariables = Exact<{
  content?: InputMaybe<Scalars['String']['input']>
  userId: Scalars['ID']['input']
  sub_categoryId: Scalars['ID']['input']
  rate?: InputMaybe<Scalars['Int']['input']>
}>

export type CreateCommentMutation = {
  __typename?: 'Mutation'
  createComment?: {
    __typename?: 'CommentEntityResponse'
    data?: {
      __typename?: 'CommentEntity'
      id?: string | null
      attributes?: { __typename?: 'Comment'; content?: string | null } | null
    } | null
  } | null
}

export type CreateOrderMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['ID']['input']>
  addressId?: InputMaybe<Scalars['ID']['input']>
  deliveryId?: InputMaybe<Scalars['ID']['input']>
  status?: InputMaybe<Enum_Order_Status>
  total_price?: InputMaybe<Scalars['Int']['input']>
  total_quantity?: InputMaybe<Scalars['Int']['input']>
  cart?: InputMaybe<
    | Array<InputMaybe<ComponentElementCartItemInput>>
    | InputMaybe<ComponentElementCartItemInput>
  >
}>

export type CreateOrderMutation = {
  __typename?: 'Mutation'
  createOrder?: {
    __typename?: 'OrderEntityResponse'
    data?: {
      __typename?: 'OrderEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Order'
        status?: Enum_Order_Status | null
        total_price?: number | null
        total_quantity?: number | null
        createdAt?: any | null
        updatedAt?: any | null
        users_permissions_user?: {
          __typename?: 'UsersPermissionsUserEntityResponse'
          data?: {
            __typename?: 'UsersPermissionsUserEntity'
            id?: string | null
          } | null
        } | null
        delivery?: {
          __typename?: 'DeliveryEntityResponse'
          data?: {
            __typename?: 'DeliveryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Delivery'
              title: string
              price: number
            } | null
          } | null
        } | null
        address?: {
          __typename?: 'AddressEntityResponse'
          data?: { __typename?: 'AddressEntity'; id?: string | null } | null
        } | null
        cart?: Array<{
          __typename?: 'ComponentElementCartItem'
          id: string
          quantity: number
          product?: {
            __typename?: 'ProductEntityResponse'
            data?: {
              __typename?: 'ProductEntity'
              id?: string | null
              attributes?: { __typename?: 'Product'; name: string } | null
            } | null
          } | null
        } | null> | null
      } | null
    } | null
  } | null
}

export type UpdateRatingProductMutationVariables = Exact<{
  productId: Scalars['ID']['input']
  rate?: InputMaybe<Scalars['Float']['input']>
}>

export type UpdateRatingProductMutation = {
  __typename?: 'Mutation'
  updateProduct?: {
    __typename?: 'ProductEntityResponse'
    data?: {
      __typename?: 'ProductEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Product'
        name: string
        rating?: number | null
      } | null
    } | null
  } | null
}

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input']
  username?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
}>

export type UpdateUserMutation = {
  __typename?: 'Mutation'
  updateUsersPermissionsUser: {
    __typename?: 'UsersPermissionsUserEntityResponse'
    data?: {
      __typename?: 'UsersPermissionsUserEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UsersPermissionsUser'
        username: string
        email: string
      } | null
    } | null
  }
}

export type GetAddressQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>
}>

export type GetAddressQuery = {
  __typename?: 'Query'
  addresses?: {
    __typename?: 'AddressEntityResponseCollection'
    data: Array<{
      __typename?: 'AddressEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Address'
        title: string
        region: string
        city: string
        street: string
        house: string
        apartment?: string | null
        postal_code: string
        updatedAt?: any | null
        users_permissions_user?: {
          __typename?: 'UsersPermissionsUserEntityResponse'
          data?: {
            __typename?: 'UsersPermissionsUserEntity'
            id?: string | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type GetBrandsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>
}>

export type GetBrandsQuery = {
  __typename?: 'Query'
  brands?: {
    __typename?: 'BrandEntityResponseCollection'
    data: Array<{
      __typename?: 'BrandEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Brand'
        name: string
        slug?: string | null
        image?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              name: string
              alternativeText?: string | null
              width?: number | null
              height?: number | null
              url: string
            } | null
          } | null
        } | null
        categories?: {
          __typename?: 'CategoryRelationResponseCollection'
          data: Array<{
            __typename?: 'CategoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Category'
              name: string
              slug?: string | null
            } | null
          }>
        } | null
        products?: {
          __typename?: 'ProductRelationResponseCollection'
          data: Array<{
            __typename?: 'ProductEntity'
            attributes?: {
              __typename?: 'Product'
              name: string
              slug?: string | null
              description?: string | null
              price?: number | null
              rating?: number | null
              image: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  attributes?: {
                    __typename?: 'UploadFile'
                    name: string
                    alternativeText?: string | null
                    width?: number | null
                    height?: number | null
                    url: string
                  } | null
                }>
              }
              collections?: {
                __typename?: 'CollectionRelationResponseCollection'
                data: Array<{
                  __typename?: 'CollectionEntity'
                  attributes?: {
                    __typename?: 'Collection'
                    name: string
                    discount?: number | null
                    icon?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        attributes?: {
                          __typename?: 'UploadFile'
                          name: string
                          alternativeText?: string | null
                          width?: number | null
                          height?: number | null
                          url: string
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
              color?: {
                __typename?: 'ColorEntityResponse'
                data?: {
                  __typename?: 'ColorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Color'
                    title: string
                    color?: string | null
                  } | null
                } | null
              } | null
              memory?: {
                __typename?: 'MemoryEntityResponse'
                data?: {
                  __typename?: 'MemoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Memory'
                    value: number
                    title: string
                  } | null
                } | null
              } | null
              brand?: {
                __typename?: 'BrandEntityResponse'
                data?: { __typename?: 'BrandEntity'; id?: string | null } | null
              } | null
              category?: {
                __typename?: 'CategoryEntityResponse'
                data?: {
                  __typename?: 'CategoryEntity'
                  id?: string | null
                } | null
              } | null
              sub_category?: {
                __typename?: 'SubCategoryEntityResponse'
                data?: {
                  __typename?: 'SubCategoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'SubCategory'
                    colors?: {
                      __typename?: 'ColorRelationResponseCollection'
                      data: Array<{
                        __typename?: 'ColorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Color'
                          title: string
                          color?: string | null
                        } | null
                      }>
                    } | null
                    memories?: {
                      __typename?: 'MemoryRelationResponseCollection'
                      data: Array<{
                        __typename?: 'MemoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Memory'
                          title: string
                          value: number
                        } | null
                      }>
                    } | null
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type GetCategoriesQuery = {
  __typename?: 'Query'
  categories?: {
    __typename?: 'CategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'CategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Category'
        name: string
        slug?: string | null
        products?: {
          __typename?: 'ProductRelationResponseCollection'
          data: Array<{ __typename?: 'ProductEntity'; id?: string | null }>
        } | null
        sub_categories?: {
          __typename?: 'SubCategoryRelationResponseCollection'
          data: Array<{
            __typename?: 'SubCategoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'SubCategory'
              name?: string | null
              slug?: string | null
              products?: {
                __typename?: 'ProductRelationResponseCollection'
                data: Array<{
                  __typename?: 'ProductEntity'
                  id?: string | null
                }>
              } | null
            } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type GetCategoryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>
}>

export type GetCategoryQuery = {
  __typename?: 'Query'
  category?: {
    __typename?: 'CategoryEntityResponse'
    data?: {
      __typename?: 'CategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Category'
        name: string
        slug?: string | null
        products?: {
          __typename?: 'ProductRelationResponseCollection'
          data: Array<{
            __typename?: 'ProductEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Product'
              name: string
              slug?: string | null
              description?: string | null
              price?: number | null
              rating?: number | null
              image: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  attributes?: {
                    __typename?: 'UploadFile'
                    name: string
                    alternativeText?: string | null
                    width?: number | null
                    height?: number | null
                    url: string
                  } | null
                }>
              }
              collections?: {
                __typename?: 'CollectionRelationResponseCollection'
                data: Array<{
                  __typename?: 'CollectionEntity'
                  attributes?: {
                    __typename?: 'Collection'
                    name: string
                    discount?: number | null
                    icon?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        attributes?: {
                          __typename?: 'UploadFile'
                          name: string
                          alternativeText?: string | null
                          width?: number | null
                          height?: number | null
                          url: string
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
              color?: {
                __typename?: 'ColorEntityResponse'
                data?: {
                  __typename?: 'ColorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Color'
                    title: string
                    color?: string | null
                  } | null
                } | null
              } | null
              memory?: {
                __typename?: 'MemoryEntityResponse'
                data?: {
                  __typename?: 'MemoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Memory'
                    value: number
                    title: string
                  } | null
                } | null
              } | null
              brand?: {
                __typename?: 'BrandEntityResponse'
                data?: { __typename?: 'BrandEntity'; id?: string | null } | null
              } | null
              category?: {
                __typename?: 'CategoryEntityResponse'
                data?: {
                  __typename?: 'CategoryEntity'
                  id?: string | null
                } | null
              } | null
              sub_category?: {
                __typename?: 'SubCategoryEntityResponse'
                data?: {
                  __typename?: 'SubCategoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'SubCategory'
                    colors?: {
                      __typename?: 'ColorRelationResponseCollection'
                      data: Array<{
                        __typename?: 'ColorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Color'
                          title: string
                          color?: string | null
                        } | null
                      }>
                    } | null
                    memories?: {
                      __typename?: 'MemoryRelationResponseCollection'
                      data: Array<{
                        __typename?: 'MemoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Memory'
                          title: string
                          value: number
                        } | null
                      }>
                    } | null
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type GetCommentsQueryVariables = Exact<{
  sub_categoryId?: InputMaybe<Scalars['ID']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}>

export type GetCommentsQuery = {
  __typename?: 'Query'
  comments?: {
    __typename?: 'CommentEntityResponseCollection'
    data: Array<{
      __typename?: 'CommentEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Comment'
        content?: string | null
        rate: number
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        users_permissions_user?: {
          __typename?: 'UsersPermissionsUserEntityResponse'
          data?: {
            __typename?: 'UsersPermissionsUserEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UsersPermissionsUser'
              username: string
            } | null
          } | null
        } | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        total: number
        page: number
        pageSize: number
        pageCount: number
      }
    }
  } | null
}

export type GetDeliveriesQueryVariables = Exact<{ [key: string]: never }>

export type GetDeliveriesQuery = {
  __typename?: 'Query'
  deliveries?: {
    __typename?: 'DeliveryEntityResponseCollection'
    data: Array<{
      __typename?: 'DeliveryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Delivery'
        title: string
        description?: string | null
        price: number
      } | null
    }>
  } | null
}

export type GetGlobalQueryVariables = Exact<{ [key: string]: never }>

export type GetGlobalQuery = {
  __typename?: 'Query'
  global?: {
    __typename?: 'GlobalEntityResponse'
    data?: {
      __typename?: 'GlobalEntity'
      attributes?: {
        __typename?: 'Global'
        seo?: {
          __typename?: 'ComponentSharedSeo'
          metaTitle: string
          metaDescription: string
          keywords?: string | null
          metaImage?: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                name: string
                alternativeText?: string | null
                width?: number | null
                height?: number | null
                url: string
              } | null
            } | null
          } | null
          metaSocial?: Array<{
            __typename?: 'ComponentSharedMetaSocial'
            socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork
            title: string
            description: string
            image?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: {
                  __typename?: 'UploadFile'
                  name: string
                  alternativeText?: string | null
                  width?: number | null
                  height?: number | null
                  url: string
                } | null
              } | null
            } | null
          } | null> | null
        } | null
        menu?: Array<{
          __typename?: 'ComponentSharedLink'
          id: string
          title: string
          url: string
        } | null> | null
        social?: Array<{
          __typename?: 'ComponentSharedLink'
          id: string
          title: string
          url: string
        } | null> | null
        service?: Array<{
          __typename?: 'ComponentSharedLink'
          id: string
          title: string
          url: string
        } | null> | null
      } | null
    } | null
  } | null
}

export type GetPagesQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetPagesQuery = {
  __typename?: 'Query'
  pages?: {
    __typename?: 'PageEntityResponseCollection'
    data: Array<{
      __typename?: 'PageEntity'
      attributes?: {
        __typename?: 'Page'
        title: string
        slug?: string | null
        seo?: {
          __typename?: 'ComponentSharedSeo'
          metaTitle: string
          metaDescription: string
          keywords?: string | null
        } | null
        sections?: Array<
          | {
              __typename: 'ComponentSectionCategories'
              id: string
              title?: string | null
              description?: string | null
              categories?: {
                __typename?: 'CategoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'CategoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Category'
                    name: string
                    slug?: string | null
                    image?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        attributes?: {
                          __typename?: 'UploadFile'
                          name: string
                          alternativeText?: string | null
                          width?: number | null
                          height?: number | null
                          url: string
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionHeader'
              id: string
              title?: string | null
            }
          | {
              __typename: 'ComponentSectionRichText'
              id: string
              content?: string | null
            }
          | {
              __typename: 'ComponentSectionSliderCollection'
              id: string
              title?: string | null
              description?: string | null
              collection?: {
                __typename?: 'CollectionEntityResponse'
                data?: {
                  __typename?: 'CollectionEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Collection'
                    name: string
                    discount?: number | null
                    products?: {
                      __typename?: 'ProductRelationResponseCollection'
                      data: Array<{
                        __typename?: 'ProductEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Product'
                          name: string
                          slug?: string | null
                          description?: string | null
                          price?: number | null
                          rating?: number | null
                          image: {
                            __typename?: 'UploadFileRelationResponseCollection'
                            data: Array<{
                              __typename?: 'UploadFileEntity'
                              attributes?: {
                                __typename?: 'UploadFile'
                                name: string
                                alternativeText?: string | null
                                width?: number | null
                                height?: number | null
                                url: string
                              } | null
                            }>
                          }
                          collections?: {
                            __typename?: 'CollectionRelationResponseCollection'
                            data: Array<{
                              __typename?: 'CollectionEntity'
                              attributes?: {
                                __typename?: 'Collection'
                                name: string
                                discount?: number | null
                                icon?: {
                                  __typename?: 'UploadFileEntityResponse'
                                  data?: {
                                    __typename?: 'UploadFileEntity'
                                    attributes?: {
                                      __typename?: 'UploadFile'
                                      name: string
                                      alternativeText?: string | null
                                      width?: number | null
                                      height?: number | null
                                      url: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            }>
                          } | null
                          color?: {
                            __typename?: 'ColorEntityResponse'
                            data?: {
                              __typename?: 'ColorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Color'
                                title: string
                                color?: string | null
                              } | null
                            } | null
                          } | null
                          memory?: {
                            __typename?: 'MemoryEntityResponse'
                            data?: {
                              __typename?: 'MemoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Memory'
                                value: number
                                title: string
                              } | null
                            } | null
                          } | null
                          brand?: {
                            __typename?: 'BrandEntityResponse'
                            data?: {
                              __typename?: 'BrandEntity'
                              id?: string | null
                            } | null
                          } | null
                          category?: {
                            __typename?: 'CategoryEntityResponse'
                            data?: {
                              __typename?: 'CategoryEntity'
                              id?: string | null
                            } | null
                          } | null
                          sub_category?: {
                            __typename?: 'SubCategoryEntityResponse'
                            data?: {
                              __typename?: 'SubCategoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'SubCategory'
                                colors?: {
                                  __typename?: 'ColorRelationResponseCollection'
                                  data: Array<{
                                    __typename?: 'ColorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Color'
                                      title: string
                                      color?: string | null
                                    } | null
                                  }>
                                } | null
                                memories?: {
                                  __typename?: 'MemoryRelationResponseCollection'
                                  data: Array<{
                                    __typename?: 'MemoryEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Memory'
                                      title: string
                                      value: number
                                    } | null
                                  }>
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      }>
                    } | null
                    icon?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        attributes?: {
                          __typename?: 'UploadFile'
                          name: string
                          alternativeText?: string | null
                          width?: number | null
                          height?: number | null
                          url: string
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentSectionSliderPromo'
              id: string
              slide?: Array<{
                __typename?: 'ComponentElementSlidePromo'
                id: string
                title?: string | null
                description?: string | null
                link?: string | null
                image?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      name: string
                      alternativeText?: string | null
                      width?: number | null
                      height?: number | null
                      url: string
                    } | null
                  } | null
                } | null
              } | null> | null
            }
          | { __typename: 'Error' }
          | null
        > | null
      } | null
    }>
  } | null
}

export type GetOrderByUserIdQueryVariables = Exact<{
  userId: Scalars['ID']['input']
}>

export type GetOrderByUserIdQuery = {
  __typename?: 'Query'
  orders?: {
    __typename?: 'OrderEntityResponseCollection'
    data: Array<{
      __typename?: 'OrderEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Order'
        status?: Enum_Order_Status | null
        total_price?: number | null
        total_quantity?: number | null
        createdAt?: any | null
        updatedAt?: any | null
        users_permissions_user?: {
          __typename?: 'UsersPermissionsUserEntityResponse'
          data?: {
            __typename?: 'UsersPermissionsUserEntity'
            id?: string | null
          } | null
        } | null
        delivery?: {
          __typename?: 'DeliveryEntityResponse'
          data?: {
            __typename?: 'DeliveryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Delivery'
              title: string
              price: number
            } | null
          } | null
        } | null
        address?: {
          __typename?: 'AddressEntityResponse'
          data?: {
            __typename?: 'AddressEntity'
            id?: string | null
            attributes?: { __typename?: 'Address'; title: string } | null
          } | null
        } | null
        cart?: Array<{
          __typename?: 'ComponentElementCartItem'
          id: string
          quantity: number
          product?: {
            __typename?: 'ProductEntityResponse'
            data?: {
              __typename?: 'ProductEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Product'
                name: string
                slug?: string | null
                description?: string | null
                price?: number | null
                rating?: number | null
                image: {
                  __typename?: 'UploadFileRelationResponseCollection'
                  data: Array<{
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      name: string
                      alternativeText?: string | null
                      width?: number | null
                      height?: number | null
                      url: string
                    } | null
                  }>
                }
                collections?: {
                  __typename?: 'CollectionRelationResponseCollection'
                  data: Array<{
                    __typename?: 'CollectionEntity'
                    attributes?: {
                      __typename?: 'Collection'
                      name: string
                      discount?: number | null
                      icon?: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          attributes?: {
                            __typename?: 'UploadFile'
                            name: string
                            alternativeText?: string | null
                            width?: number | null
                            height?: number | null
                            url: string
                          } | null
                        } | null
                      } | null
                    } | null
                  }>
                } | null
                color?: {
                  __typename?: 'ColorEntityResponse'
                  data?: {
                    __typename?: 'ColorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Color'
                      title: string
                      color?: string | null
                    } | null
                  } | null
                } | null
                memory?: {
                  __typename?: 'MemoryEntityResponse'
                  data?: {
                    __typename?: 'MemoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Memory'
                      value: number
                      title: string
                    } | null
                  } | null
                } | null
                brand?: {
                  __typename?: 'BrandEntityResponse'
                  data?: {
                    __typename?: 'BrandEntity'
                    id?: string | null
                  } | null
                } | null
                category?: {
                  __typename?: 'CategoryEntityResponse'
                  data?: {
                    __typename?: 'CategoryEntity'
                    id?: string | null
                  } | null
                } | null
                sub_category?: {
                  __typename?: 'SubCategoryEntityResponse'
                  data?: {
                    __typename?: 'SubCategoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'SubCategory'
                      colors?: {
                        __typename?: 'ColorRelationResponseCollection'
                        data: Array<{
                          __typename?: 'ColorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Color'
                            title: string
                            color?: string | null
                          } | null
                        }>
                      } | null
                      memories?: {
                        __typename?: 'MemoryRelationResponseCollection'
                        data: Array<{
                          __typename?: 'MemoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Memory'
                            title: string
                            value: number
                          } | null
                        }>
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null> | null
      } | null
    }>
  } | null
}

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetProductQuery = {
  __typename?: 'Query'
  product?: {
    __typename?: 'ProductEntityResponse'
    data?: {
      __typename?: 'ProductEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Product'
        name: string
        slug?: string | null
        description?: string | null
        price?: number | null
        rating?: number | null
        image: {
          __typename?: 'UploadFileRelationResponseCollection'
          data: Array<{
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              name: string
              alternativeText?: string | null
              width?: number | null
              height?: number | null
              url: string
            } | null
          }>
        }
        collections?: {
          __typename?: 'CollectionRelationResponseCollection'
          data: Array<{
            __typename?: 'CollectionEntity'
            attributes?: {
              __typename?: 'Collection'
              name: string
              discount?: number | null
              icon?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  attributes?: {
                    __typename?: 'UploadFile'
                    name: string
                    alternativeText?: string | null
                    width?: number | null
                    height?: number | null
                    url: string
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
        color?: {
          __typename?: 'ColorEntityResponse'
          data?: {
            __typename?: 'ColorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Color'
              title: string
              color?: string | null
            } | null
          } | null
        } | null
        memory?: {
          __typename?: 'MemoryEntityResponse'
          data?: {
            __typename?: 'MemoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Memory'
              value: number
              title: string
            } | null
          } | null
        } | null
        brand?: {
          __typename?: 'BrandEntityResponse'
          data?: { __typename?: 'BrandEntity'; id?: string | null } | null
        } | null
        category?: {
          __typename?: 'CategoryEntityResponse'
          data?: { __typename?: 'CategoryEntity'; id?: string | null } | null
        } | null
        sub_category?: {
          __typename?: 'SubCategoryEntityResponse'
          data?: {
            __typename?: 'SubCategoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'SubCategory'
              colors?: {
                __typename?: 'ColorRelationResponseCollection'
                data: Array<{
                  __typename?: 'ColorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Color'
                    title: string
                    color?: string | null
                  } | null
                }>
              } | null
              memories?: {
                __typename?: 'MemoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'MemoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Memory'
                    title: string
                    value: number
                  } | null
                }>
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type GetProductsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  start?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  productId?: InputMaybe<Scalars['ID']['input']>
  categoryId?: InputMaybe<Scalars['ID']['input']>
  sub_categoryId?: InputMaybe<Scalars['ID']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >
  colorId?: InputMaybe<Scalars['ID']['input']>
  memoryId?: InputMaybe<Scalars['ID']['input']>
}>

export type GetProductsQuery = {
  __typename?: 'Query'
  products?: {
    __typename?: 'ProductEntityResponseCollection'
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        total: number
        page: number
        pageSize: number
        pageCount: number
      }
    }
    data: Array<{
      __typename?: 'ProductEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Product'
        name: string
        slug?: string | null
        description?: string | null
        price?: number | null
        rating?: number | null
        image: {
          __typename?: 'UploadFileRelationResponseCollection'
          data: Array<{
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              name: string
              alternativeText?: string | null
              width?: number | null
              height?: number | null
              url: string
            } | null
          }>
        }
        collections?: {
          __typename?: 'CollectionRelationResponseCollection'
          data: Array<{
            __typename?: 'CollectionEntity'
            attributes?: {
              __typename?: 'Collection'
              name: string
              discount?: number | null
              icon?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  attributes?: {
                    __typename?: 'UploadFile'
                    name: string
                    alternativeText?: string | null
                    width?: number | null
                    height?: number | null
                    url: string
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
        color?: {
          __typename?: 'ColorEntityResponse'
          data?: {
            __typename?: 'ColorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Color'
              title: string
              color?: string | null
            } | null
          } | null
        } | null
        memory?: {
          __typename?: 'MemoryEntityResponse'
          data?: {
            __typename?: 'MemoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Memory'
              value: number
              title: string
            } | null
          } | null
        } | null
        brand?: {
          __typename?: 'BrandEntityResponse'
          data?: { __typename?: 'BrandEntity'; id?: string | null } | null
        } | null
        category?: {
          __typename?: 'CategoryEntityResponse'
          data?: { __typename?: 'CategoryEntity'; id?: string | null } | null
        } | null
        sub_category?: {
          __typename?: 'SubCategoryEntityResponse'
          data?: {
            __typename?: 'SubCategoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'SubCategory'
              colors?: {
                __typename?: 'ColorRelationResponseCollection'
                data: Array<{
                  __typename?: 'ColorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Color'
                    title: string
                    color?: string | null
                  } | null
                }>
              } | null
              memories?: {
                __typename?: 'MemoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'MemoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Memory'
                    title: string
                    value: number
                  } | null
                }>
              } | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type GetSubCategoryQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetSubCategoryQuery = {
  __typename?: 'Query'
  subCategory?: {
    __typename?: 'SubCategoryEntityResponse'
    data?: {
      __typename?: 'SubCategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'SubCategory'
        name?: string | null
        slug?: string | null
        slider?: {
          __typename?: 'ComponentSectionSliderCollection'
          id: string
          title?: string | null
          description?: string | null
          collection?: {
            __typename?: 'CollectionEntityResponse'
            data?: {
              __typename?: 'CollectionEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Collection'
                name: string
                discount?: number | null
                products?: {
                  __typename?: 'ProductRelationResponseCollection'
                  data: Array<{
                    __typename?: 'ProductEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Product'
                      name: string
                      slug?: string | null
                      description?: string | null
                      price?: number | null
                      rating?: number | null
                      image: {
                        __typename?: 'UploadFileRelationResponseCollection'
                        data: Array<{
                          __typename?: 'UploadFileEntity'
                          attributes?: {
                            __typename?: 'UploadFile'
                            name: string
                            alternativeText?: string | null
                            width?: number | null
                            height?: number | null
                            url: string
                          } | null
                        }>
                      }
                      collections?: {
                        __typename?: 'CollectionRelationResponseCollection'
                        data: Array<{
                          __typename?: 'CollectionEntity'
                          attributes?: {
                            __typename?: 'Collection'
                            name: string
                            discount?: number | null
                            icon?: {
                              __typename?: 'UploadFileEntityResponse'
                              data?: {
                                __typename?: 'UploadFileEntity'
                                attributes?: {
                                  __typename?: 'UploadFile'
                                  name: string
                                  alternativeText?: string | null
                                  width?: number | null
                                  height?: number | null
                                  url: string
                                } | null
                              } | null
                            } | null
                          } | null
                        }>
                      } | null
                      color?: {
                        __typename?: 'ColorEntityResponse'
                        data?: {
                          __typename?: 'ColorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Color'
                            title: string
                            color?: string | null
                          } | null
                        } | null
                      } | null
                      memory?: {
                        __typename?: 'MemoryEntityResponse'
                        data?: {
                          __typename?: 'MemoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Memory'
                            value: number
                            title: string
                          } | null
                        } | null
                      } | null
                      brand?: {
                        __typename?: 'BrandEntityResponse'
                        data?: {
                          __typename?: 'BrandEntity'
                          id?: string | null
                        } | null
                      } | null
                      category?: {
                        __typename?: 'CategoryEntityResponse'
                        data?: {
                          __typename?: 'CategoryEntity'
                          id?: string | null
                        } | null
                      } | null
                      sub_category?: {
                        __typename?: 'SubCategoryEntityResponse'
                        data?: {
                          __typename?: 'SubCategoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'SubCategory'
                            colors?: {
                              __typename?: 'ColorRelationResponseCollection'
                              data: Array<{
                                __typename?: 'ColorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Color'
                                  title: string
                                  color?: string | null
                                } | null
                              }>
                            } | null
                            memories?: {
                              __typename?: 'MemoryRelationResponseCollection'
                              data: Array<{
                                __typename?: 'MemoryEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Memory'
                                  title: string
                                  value: number
                                } | null
                              }>
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }>
                } | null
                icon?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      name: string
                      alternativeText?: string | null
                      width?: number | null
                      height?: number | null
                      url: string
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetUserByIdQuery = {
  __typename?: 'Query'
  usersPermissionsUser?: {
    __typename?: 'UsersPermissionsUserEntityResponse'
    data?: {
      __typename?: 'UsersPermissionsUserEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UsersPermissionsUser'
        username: string
        email: string
        blocked?: boolean | null
        confirmed?: boolean | null
        avatar?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              name: string
              alternativeText?: string | null
              width?: number | null
              height?: number | null
              url: string
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'UsersPermissionsMe'
    id: string
    username: string
    email?: string | null
    confirmed?: boolean | null
    blocked?: boolean | null
    role?: {
      __typename?: 'UsersPermissionsMeRole'
      id: string
      name: string
      description?: string | null
      type?: string | null
    } | null
  } | null
}

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input']
}>

export type GetUserByEmailQuery = {
  __typename?: 'Query'
  usersPermissionsUsers?: {
    __typename?: 'UsersPermissionsUserEntityResponseCollection'
    data: Array<{
      __typename?: 'UsersPermissionsUserEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UsersPermissionsUser'
        username: string
        email: string
        blocked?: boolean | null
      } | null
    }>
  } | null
}

export const AddressFragmentDoc = /*#__PURE__*/ `
    fragment Address on Address {
  title
  region
  city
  street
  house
  apartment
  postal_code
  updatedAt
  users_permissions_user {
    data {
      id
    }
  }
}
    `
export const ImageFragmentDoc = /*#__PURE__*/ `
    fragment Image on UploadFile {
  name
  alternativeText
  width
  height
  url
}
    `
export const CategoriesFragmentDoc = /*#__PURE__*/ `
    fragment Categories on ComponentSectionCategories {
  id
  title
  description
  categories {
    data {
      id
      attributes {
        name
        slug
        image {
          data {
            attributes {
              ...Image
            }
          }
        }
      }
    }
  }
}
    `
export const HeaderFragmentDoc = /*#__PURE__*/ `
    fragment Header on ComponentSectionHeader {
  id
  title
}
    `
export const LinkFragmentDoc = /*#__PURE__*/ `
    fragment Link on ComponentSharedLink {
  id
  title
  url
}
    `
export const PromoSliderFragmentDoc = /*#__PURE__*/ `
    fragment PromoSlider on ComponentSectionSliderPromo {
  id
  slide {
    id
    title
    description
    link
    image {
      data {
        id
        attributes {
          ...Image
        }
      }
    }
  }
}
    `
export const RichTextFragmentDoc = /*#__PURE__*/ `
    fragment RichText on ComponentSectionRichText {
  id
  content
}
    `
export const SeoFragmentDoc = /*#__PURE__*/ `
    fragment Seo on ComponentSharedSeo {
  metaTitle
  metaDescription
  metaImage {
    data {
      id
      attributes {
        ...Image
      }
    }
  }
  metaSocial {
    socialNetwork
    title
    description
    image {
      data {
        attributes {
          ...Image
        }
      }
    }
  }
  keywords
}
    `
export const CollectionFragmentDoc = /*#__PURE__*/ `
    fragment Collection on Collection {
  name
  discount
  icon {
    data {
      attributes {
        ...Image
      }
    }
  }
}
    `
export const ProductFragmentDoc = /*#__PURE__*/ `
    fragment Product on Product {
  name
  slug
  description
  price
  rating
  image {
    data {
      attributes {
        ...Image
      }
    }
  }
  collections {
    data {
      attributes {
        ...Collection
      }
    }
  }
  color {
    data {
      id
      attributes {
        title
        color
      }
    }
  }
  memory {
    data {
      id
      attributes {
        value
        title
      }
    }
  }
  brand {
    data {
      id
    }
  }
  category {
    data {
      id
    }
  }
  sub_category {
    data {
      id
      attributes {
        colors {
          data {
            id
            attributes {
              title
              color
            }
          }
        }
        memories {
          data {
            id
            attributes {
              title
              value
            }
          }
        }
      }
    }
  }
}
    `
export const SliderCollectionFragmentDoc = /*#__PURE__*/ `
    fragment SliderCollection on ComponentSectionSliderCollection {
  id
  title
  description
  collection {
    data {
      id
      attributes {
        ...Collection
        products {
          data {
            id
            attributes {
              ...Product
            }
          }
        }
      }
    }
  }
}
    `
export const CreateAddressDocument = /*#__PURE__*/ `
    mutation createAddress($region: String, $city: String, $street: String, $house: String, $apartment: String, $postal_code: String, $users_permissions_user: ID, $order: ID, $title: String) {
  createAddress(
    data: {region: $region, city: $city, street: $street, house: $house, apartment: $apartment, postal_code: $postal_code, users_permissions_user: $users_permissions_user, order: $order, title: $title}
  ) {
    data {
      id
      attributes {
        ...Address
      }
    }
  }
}
    ${AddressFragmentDoc}`
export const DeleteAddressDocument = /*#__PURE__*/ `
    mutation deleteAddress($id: ID!) {
  deleteAddress(id: $id) {
    data {
      id
    }
  }
}
    `
export const UpdateAddressDocument = /*#__PURE__*/ `
    mutation updateAddress($id: ID!, $region: String, $city: String, $street: String, $house: String, $apartment: String, $postal_code: String, $users_permissions_user: ID, $order: ID, $title: String) {
  updateAddress(
    id: $id
    data: {region: $region, city: $city, street: $street, house: $house, apartment: $apartment, postal_code: $postal_code, users_permissions_user: $users_permissions_user, order: $order, title: $title}
  ) {
    data {
      id
      attributes {
        ...Address
      }
    }
  }
}
    ${AddressFragmentDoc}`
export const LoginDocument = /*#__PURE__*/ `
    mutation login($email: String!, $password: String!) {
  login(input: {identifier: $email, password: $password, provider: "local"}) {
    jwt
    user {
      id
      username
      email
      confirmed
      blocked
    }
  }
}
    `
export const RegisterDocument = /*#__PURE__*/ `
    mutation register($username: String!, $email: String!, $password: String!) {
  register(input: {username: $username, email: $email, password: $password}) {
    jwt
    user {
      id
      username
      email
      confirmed
      blocked
      role {
        id
        name
        description
        type
      }
    }
  }
}
    `
export const CreateCommentDocument = /*#__PURE__*/ `
    mutation CreateComment($content: String, $userId: ID!, $sub_categoryId: ID!, $rate: Int) {
  createComment(
    data: {content: $content, users_permissions_user: $userId, sub_category: $sub_categoryId, rate: $rate}
  ) {
    data {
      id
      attributes {
        content
      }
    }
  }
}
    `
export const CreateOrderDocument = /*#__PURE__*/ `
    mutation createOrder($userId: ID, $addressId: ID, $deliveryId: ID, $status: ENUM_ORDER_STATUS, $total_price: Int, $total_quantity: Int, $cart: [ComponentElementCartItemInput]) {
  createOrder(
    data: {users_permissions_user: $userId, delivery: $deliveryId, address: $addressId, status: $status, total_price: $total_price, total_quantity: $total_quantity, cart: $cart}
  ) {
    data {
      id
      attributes {
        status
        total_price
        total_quantity
        createdAt
        updatedAt
        users_permissions_user {
          data {
            id
          }
        }
        delivery {
          data {
            id
            attributes {
              title
              price
            }
          }
        }
        address {
          data {
            id
          }
        }
        cart {
          id
          quantity
          product {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
}
    `
export const UpdateRatingProductDocument = /*#__PURE__*/ `
    mutation updateRatingProduct($productId: ID!, $rate: Float) {
  updateProduct(id: $productId, data: {rating: $rate}) {
    data {
      id
      attributes {
        name
        rating
      }
    }
  }
}
    `
export const UpdateUserDocument = /*#__PURE__*/ `
    mutation updateUser($id: ID!, $username: String, $email: String) {
  updateUsersPermissionsUser(id: $id, data: {username: $username, email: $email}) {
    data {
      id
      attributes {
        username
        email
      }
    }
  }
}
    `
export const GetAddressDocument = /*#__PURE__*/ `
    query getAddress($id: ID) {
  addresses(filters: {users_permissions_user: {id: {eq: $id}}}) {
    data {
      id
      attributes {
        ...Address
      }
    }
  }
}
    ${AddressFragmentDoc}`
export const GetBrandsDocument = /*#__PURE__*/ `
    query getBrands($id: ID) {
  brands(filters: {id: {eq: $id}}) {
    data {
      id
      attributes {
        name
        slug
        image {
          data {
            attributes {
              ...Image
            }
          }
        }
        categories {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
        products {
          data {
            attributes {
              ...Product
            }
          }
        }
      }
    }
  }
}
    ${ImageFragmentDoc}
${ProductFragmentDoc}
${CollectionFragmentDoc}`
export const GetCategoriesDocument = /*#__PURE__*/ `
    query getCategories {
  categories {
    data {
      id
      attributes {
        name
        slug
        products {
          data {
            id
          }
        }
        sub_categories {
          data {
            id
            attributes {
              name
              slug
              products {
                data {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
    `
export const GetCategoryDocument = /*#__PURE__*/ `
    query getCategory($id: ID) {
  category(id: $id) {
    data {
      id
      attributes {
        name
        slug
        products {
          data {
            id
            attributes {
              ...Product
            }
          }
        }
      }
    }
  }
}
    ${ProductFragmentDoc}
${ImageFragmentDoc}
${CollectionFragmentDoc}`
export const GetCommentsDocument = /*#__PURE__*/ `
    query getComments($sub_categoryId: ID, $page: Int, $pageSize: Int) {
  comments(
    pagination: {page: $page, pageSize: $pageSize}
    filters: {sub_category: {id: {eq: $sub_categoryId}}}
  ) {
    data {
      id
      attributes {
        content
        rate
        createdAt
        updatedAt
        publishedAt
        users_permissions_user {
          data {
            id
            attributes {
              username
            }
          }
        }
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `
export const GetDeliveriesDocument = /*#__PURE__*/ `
    query getDeliveries {
  deliveries {
    data {
      id
      attributes {
        title
        description
        price
      }
    }
  }
}
    `
export const GetGlobalDocument = /*#__PURE__*/ `
    query getGlobal {
  global {
    data {
      attributes {
        seo {
          ...Seo
        }
        menu {
          ...Link
        }
        social {
          ...Link
        }
        service {
          ...Link
        }
      }
    }
  }
}
    ${SeoFragmentDoc}
${ImageFragmentDoc}
${LinkFragmentDoc}`
export const GetPagesDocument = /*#__PURE__*/ `
    query getPages($slug: String!) {
  pages(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        title
        slug
        seo {
          metaTitle
          metaDescription
          keywords
        }
        sections {
          __typename
          ...Header
          ...PromoSlider
          ...SliderCollection
          ...RichText
          ...Categories
        }
      }
    }
  }
}
    ${HeaderFragmentDoc}
${PromoSliderFragmentDoc}
${ImageFragmentDoc}
${SliderCollectionFragmentDoc}
${CollectionFragmentDoc}
${ProductFragmentDoc}
${RichTextFragmentDoc}
${CategoriesFragmentDoc}`
export const GetOrderByUserIdDocument = /*#__PURE__*/ `
    query getOrderByUserId($userId: ID!) {
  orders(filters: {users_permissions_user: {id: {eq: $userId}}}) {
    data {
      id
      attributes {
        status
        total_price
        total_quantity
        createdAt
        updatedAt
        users_permissions_user {
          data {
            id
          }
        }
        delivery {
          data {
            id
            attributes {
              title
              price
            }
          }
        }
        address {
          data {
            id
            attributes {
              title
            }
          }
        }
        cart {
          id
          quantity
          product {
            data {
              id
              attributes {
                ...Product
              }
            }
          }
        }
      }
    }
  }
}
    ${ProductFragmentDoc}
${ImageFragmentDoc}
${CollectionFragmentDoc}`
export const GetProductDocument = /*#__PURE__*/ `
    query getProduct($id: ID!) {
  product(id: $id) {
    data {
      id
      attributes {
        ...Product
      }
    }
  }
}
    ${ProductFragmentDoc}
${ImageFragmentDoc}
${CollectionFragmentDoc}`
export const GetProductsDocument = /*#__PURE__*/ `
    query getProducts($page: Int, $pageSize: Int, $start: Int, $limit: Int, $productId: ID, $categoryId: ID, $sub_categoryId: ID, $query: String, $sort: [String], $colorId: ID, $memoryId: ID) {
  products(
    sort: $sort
    pagination: {page: $page, pageSize: $pageSize, start: $start, limit: $limit}
    filters: {id: {eq: $productId}, category: {id: {eq: $categoryId}}, sub_category: {id: {eq: $sub_categoryId}}, color: {id: {eq: $colorId}}, memory: {id: {eq: $memoryId}}, name: {contains: $query}}
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    data {
      id
      attributes {
        ...Product
      }
    }
  }
}
    ${ProductFragmentDoc}
${ImageFragmentDoc}
${CollectionFragmentDoc}`
export const GetSubCategoryDocument = /*#__PURE__*/ `
    query getSubCategory($id: ID!) {
  subCategory(id: $id) {
    data {
      id
      attributes {
        name
        slug
        slider {
          ...SliderCollection
        }
      }
    }
  }
}
    ${SliderCollectionFragmentDoc}
${CollectionFragmentDoc}
${ImageFragmentDoc}
${ProductFragmentDoc}`
export const GetUserByIdDocument = /*#__PURE__*/ `
    query getUserById($id: ID!) {
  usersPermissionsUser(id: $id) {
    data {
      id
      attributes {
        username
        email
        blocked
        confirmed
        avatar {
          data {
            id
            attributes {
              ...Image
            }
          }
        }
      }
    }
  }
}
    ${ImageFragmentDoc}`
export const MeDocument = /*#__PURE__*/ `
    query me {
  me {
    id
    username
    email
    confirmed
    blocked
    role {
      id
      name
      description
      type
    }
  }
}
    `
export const GetUserByEmailDocument = /*#__PURE__*/ `
    query getUserByEmail($email: String!) {
  usersPermissionsUsers(filters: {email: {eq: $email}}) {
    data {
      id
      attributes {
        username
        email
        blocked
      }
    }
  }
}
    `

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  variables,
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    createAddress(
      variables?: CreateAddressMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateAddressMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateAddressMutation>(
            CreateAddressDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createAddress',
        'mutation',
        variables,
      )
    },
    deleteAddress(
      variables: DeleteAddressMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteAddressMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteAddressMutation>(
            DeleteAddressDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteAddress',
        'mutation',
        variables,
      )
    },
    updateAddress(
      variables: UpdateAddressMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateAddressMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateAddressMutation>(
            UpdateAddressDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateAddress',
        'mutation',
        variables,
      )
    },
    login(
      variables: LoginMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<LoginMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoginMutation>(LoginDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'login',
        'mutation',
        variables,
      )
    },
    register(
      variables: RegisterMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<RegisterMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RegisterMutation>(RegisterDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'register',
        'mutation',
        variables,
      )
    },
    CreateComment(
      variables: CreateCommentMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateCommentMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateCommentMutation>(
            CreateCommentDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'CreateComment',
        'mutation',
        variables,
      )
    },
    createOrder(
      variables?: CreateOrderMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateOrderMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateOrderMutation>(CreateOrderDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createOrder',
        'mutation',
        variables,
      )
    },
    updateRatingProduct(
      variables: UpdateRatingProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateRatingProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateRatingProductMutation>(
            UpdateRatingProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateRatingProduct',
        'mutation',
        variables,
      )
    },
    updateUser(
      variables: UpdateUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateUserMutation>(UpdateUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'updateUser',
        'mutation',
        variables,
      )
    },
    getAddress(
      variables?: GetAddressQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetAddressQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAddressQuery>(GetAddressDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getAddress',
        'query',
        variables,
      )
    },
    getBrands(
      variables?: GetBrandsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetBrandsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBrandsQuery>(GetBrandsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getBrands',
        'query',
        variables,
      )
    },
    getCategories(
      variables?: GetCategoriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetCategoriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCategoriesQuery>(GetCategoriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getCategories',
        'query',
        variables,
      )
    },
    getCategory(
      variables?: GetCategoryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetCategoryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCategoryQuery>(GetCategoryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getCategory',
        'query',
        variables,
      )
    },
    getComments(
      variables?: GetCommentsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetCommentsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCommentsQuery>(GetCommentsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getComments',
        'query',
        variables,
      )
    },
    getDeliveries(
      variables?: GetDeliveriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetDeliveriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetDeliveriesQuery>(GetDeliveriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getDeliveries',
        'query',
        variables,
      )
    },
    getGlobal(
      variables?: GetGlobalQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetGlobalQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetGlobalQuery>(GetGlobalDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getGlobal',
        'query',
        variables,
      )
    },
    getPages(
      variables: GetPagesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetPagesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPagesQuery>(GetPagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPages',
        'query',
        variables,
      )
    },
    getOrderByUserId(
      variables: GetOrderByUserIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetOrderByUserIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetOrderByUserIdQuery>(
            GetOrderByUserIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getOrderByUserId',
        'query',
        variables,
      )
    },
    getProduct(
      variables: GetProductQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetProductQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductQuery>(GetProductDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getProduct',
        'query',
        variables,
      )
    },
    getProducts(
      variables?: GetProductsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetProductsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductsQuery>(GetProductsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getProducts',
        'query',
        variables,
      )
    },
    getSubCategory(
      variables: GetSubCategoryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSubCategoryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSubCategoryQuery>(
            GetSubCategoryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getSubCategory',
        'query',
        variables,
      )
    },
    getUserById(
      variables: GetUserByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetUserByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserByIdQuery>(GetUserByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getUserById',
        'query',
        variables,
      )
    },
    me(
      variables?: MeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<MeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MeQuery>(MeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'me',
        'query',
        variables,
      )
    },
    getUserByEmail(
      variables: GetUserByEmailQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetUserByEmailQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserByEmailQuery>(
            GetUserByEmailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getUserByEmail',
        'query',
        variables,
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
