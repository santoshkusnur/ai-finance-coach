import { AzureFunction, Context, HttpRequest } from "@azure/functions";

/**
 * Returns user financial profile from Cosmos DB.
 */
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('getUserProfile triggered');
  // TODO: query Cosmos
  context.res = { status: 200, body: { profile: { userId: 'sample', budgets: [] } } };
};

export default httpTrigger;
