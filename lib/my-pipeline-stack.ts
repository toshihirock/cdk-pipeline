import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { MyPipelineAppStage } from './my-pipeline-app-stage';

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      //selfMutation: false,
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        //input: CodePipelineSource.gitHub('toshhirock/cdk-pipeline', 'main'),

        input: CodePipelineSource.connection('toshihirock/cdk-pipeline', 'master', {
          connectionArn: 'arn:aws:codestar-connections:ap-northeast-1:323817733012:connection/1e20feb9-f336-40eb-a9ad-018ee518332f',
        }),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });

    pipeline.addStage(new MyPipelineAppStage(this, "test", {
      env: { account: "323817733012", region: "ap-northeast-1" }
    }));

  }
}