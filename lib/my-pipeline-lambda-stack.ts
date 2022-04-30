import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, InlineCode, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class MyLambdaStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
     const lambda =  new Function(this, 'LambdaFunction', {
        runtime: Runtime.NODEJS_12_X,
        handler: 'index.handler',
        code: new InlineCode('exports.handler = _ => "Hello, CDK";')
      });

      /*
      const table = dynamodb.Table.fromTableArn(this, 'ImportedTable', 'arn:aws:dynamodb:ap-northeast-1:323817733012:table/cdk-test');
            // now you can just call methods on the table
      table.grantReadWriteData(lambda);
      */
    }
}

