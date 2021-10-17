// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.KubernetesIngressNginx.Inputs
{

    public sealed class KedaArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// apiVersion changes with keda 1.x vs 2.x: 2.x = keda.sh/v1alpha1, 1.x = keda.k8s.io/v1alpha1.
        /// </summary>
        [Input("apiVersion")]
        public Input<string>? ApiVersion { get; set; }

        [Input("behavior")]
        public Input<Inputs.AutoscalingBehaviorArgs>? Behavior { get; set; }

        [Input("cooldownPeriod")]
        public Input<int>? CooldownPeriod { get; set; }

        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("maxReplicas")]
        public Input<int>? MaxReplicas { get; set; }

        [Input("minReplicas")]
        public Input<int>? MinReplicas { get; set; }

        [Input("pollingInterval")]
        public Input<int>? PollingInterval { get; set; }

        [Input("restoreToOriginalReplicaCount")]
        public Input<bool>? RestoreToOriginalReplicaCount { get; set; }

        [Input("scaledObject")]
        public Input<Inputs.KedaScaledObjectArgs>? ScaledObject { get; set; }

        [Input("triggers")]
        private InputList<Inputs.KedaTriggerArgs>? _triggers;
        public InputList<Inputs.KedaTriggerArgs> Triggers
        {
            get => _triggers ?? (_triggers = new InputList<Inputs.KedaTriggerArgs>());
            set => _triggers = value;
        }

        public KedaArgs()
        {
        }
    }
}
