import { Client, Databases, ID, Query } from 'react-native-appwrite';

const DATABASE__ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION__ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new Databases(client);


export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        const result = await database.listDocuments( DATABASE__ID, COLLECTION__ID, [
            Query.equal('searchTerm', query)
        ]);

        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];
            await database.updateDocument(
                DATABASE__ID,
                COLLECTION__ID,
                existingMovie.$id,
                {
                    count: existingMovie.count + 1,
                }
            )
        } else {
            await database.createDocument(
                DATABASE__ID,
                COLLECTION__ID,
                ID.unique(),
                {
                    searchTerm: query,
                    movie_id: movie.id,
                    title: movie.title,
                    count: 1,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
            )
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getTrendingMovies = async (): Promise<
TrendingMovie[] | undefined
> => {
    try {
        const result = await database.listDocuments( DATABASE__ID, COLLECTION__ID, [
            Query.limit(5),
            Query.orderDesc('count'), // Only show top 5 movies by count
        ]);
        return result.documents as unknown as TrendingMovie[];
    } catch (error) {
        console.log(error);
        throw error;
    }
}