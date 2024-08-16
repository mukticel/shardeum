import { addSchema } from '../../utils/serialization/SchemaHelpers'
import { AJVSchemaEnum } from '../enum/AJVSchemaEnum'

const schemaPutAdminCertReq = {
  type: 'object',
  properties: {},
  required: [],
  allowAdditionalProperties: false,
}

export function initPutAdminCertReq(): void {
  addSchemaDependencies()
  addSchemas()
}

// Function to add schema dependencies
function addSchemaDependencies(): void {
  // No dependencies
}

// Function to register the schema
function addSchemas(): void {
  addSchema(AJVSchemaEnum.PutAdminCertReq, schemaPutAdminCertReq)
}
