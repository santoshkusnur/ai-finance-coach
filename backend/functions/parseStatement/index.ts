import { AzureFunction, Context, HttpRequest } from "@azure/functions";

/**
 * Invokes Form Recognizer to parse uploaded financial docs.
 */
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('parseStatement triggered');
  // TODO: call Form Recognizer + store structured data in Cosmos DB
  context.res = { status: 200, body: { parsed: true } };
};

export default httpTrigger;
