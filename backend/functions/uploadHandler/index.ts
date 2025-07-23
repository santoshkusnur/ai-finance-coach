import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  // TODO: validate auth (AAD B2C token)
  // TODO: write file to Blob Storage
  context.log('Upload handler triggered.');
  const filename = req.query.name || 'upload';
  context.res = {
    status: 200,
    body: { message: `Received ${filename}` }
  };
};

export default httpTrigger;
