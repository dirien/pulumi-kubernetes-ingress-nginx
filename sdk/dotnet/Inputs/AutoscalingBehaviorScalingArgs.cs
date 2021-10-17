// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.ChartIngressNginx.Inputs
{

    public sealed class AutoscalingBehaviorScalingArgs : Pulumi.ResourceArgs
    {
        [Input("policies")]
        private InputList<Inputs.AutoscalingBehaviorScalingPolicyArgs>? _policies;
        public InputList<Inputs.AutoscalingBehaviorScalingPolicyArgs> Policies
        {
            get => _policies ?? (_policies = new InputList<Inputs.AutoscalingBehaviorScalingPolicyArgs>());
            set => _policies = value;
        }

        [Input("stabilizationWindowSeconds")]
        public Input<int>? StabilizationWindowSeconds { get; set; }

        public AutoscalingBehaviorScalingArgs()
        {
        }
    }
}
