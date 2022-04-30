import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
//import { MyLambdaStack } from './my-pipeline-lambda-stack';

import { MyDdbStack } from './my-pipeline-ddb-stack';

export class MyPipelineAppStage extends cdk.Stage {
    
    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
      super(scope, id, props);
  
      //const lambdaStack = new MyLambdaStack(this, 'LambdaStack');      
      //const lambdaStack = new MyLambdaStack(this, 'not:a:stack:name', { stackName: 'this-is-stack-name' });   
      const ddbStack = new MyDdbStack(this, 'not:a:stack:name', { stackName: 'DdbStack' }); 
    }
}