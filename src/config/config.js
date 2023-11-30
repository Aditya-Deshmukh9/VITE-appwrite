const Config = {
 appWriteUrl:String(import.meta.env.VITE_APP_APPWRITE_URL),
 appProjectId:String(import.meta.env.VITE_APP_PROJECT_URL),
 appDatabaseId:String(import.meta.env.VITE_APP_DATABASE_URL),
 appCollectionId:String(import.meta.env.VITE_APP_COLLECTION_URL),
 appBucketId:String(import.meta.env.VITE_APP_BUCKET_URL),
}

export default Config;