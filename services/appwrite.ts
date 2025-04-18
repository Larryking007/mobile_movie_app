import { Client, Databases, Query, ID } from 'react-native-appwrite';

// track the search history of the user

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;


const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!); // Your project ID

const database = new Databases(client);

export const updateSearchCount = async ( query: string, movie: Movie) => {
  try {
  const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
Query.equal('searchTerm', query) // Search for the document with the same query
  ] )

    //check if a record of that search has been stored

  if(result.documents.length > 0) {
    const existingMovie = result.documents[0];

    await database.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      existingMovie.$id,
      {
        count: existingMovie.count + 1, // Increment the search count
      }
    )
  }
  else {
    await database.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        searchTerm : query,
        count: 1, // Initialize the search count to 1
        movie_id: movie.id,
        title: movie.title,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }
    ) 
  }
} catch (error) {
  console.log(error)
  throw error
}
  // if a document is found, increment the searchCount field
  // if no document is found
  // create a new document in Appwrite database  -> 1
}

export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(5), // Limit to 10 documents
      Query.orderDesc('count')
    ])

    return result.documents  as unknown as TrendingMovie[]
  } catch (error) {
    console.log(error)
    return undefined
  }
 }
