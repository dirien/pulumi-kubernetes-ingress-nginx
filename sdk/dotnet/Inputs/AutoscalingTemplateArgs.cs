// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.ChartIngressNginx.Inputs
{

    public sealed class AutoscalingTemplateArgs : Pulumi.ResourceArgs
    {
        [Input("pods")]
        public Input<Inputs.AutoscalingTemplatePodsArgs>? Pods { get; set; }

        [Input("type")]
        public Input<string>? Type { get; set; }

        public AutoscalingTemplateArgs()
        {
        }
    }
}
