// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.ChartIngressNginx.Inputs
{

    public sealed class ControllerServiceArgs : Pulumi.ResourceArgs
    {
        [Input("annotations")]
        private InputMap<ImmutableDictionary<string, string>>? _annotations;
        public InputMap<ImmutableDictionary<string, string>> Annotations
        {
            get => _annotations ?? (_annotations = new InputMap<ImmutableDictionary<string, string>>());
            set => _annotations = value;
        }

        [Input("clusterIP")]
        public Input<string>? ClusterIP { get; set; }

        [Input("enableHttp")]
        public Input<bool>? EnableHttp { get; set; }

        [Input("enableHttps")]
        public Input<bool>? EnableHttps { get; set; }

        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("externalIPs")]
        private InputList<string>? _externalIPs;

        /// <summary>
        /// List of IP addresses at which the controller services are available Ref: https://kubernetes.io/docs/user-guide/services/#external-ips
        /// </summary>
        public InputList<string> ExternalIPs
        {
            get => _externalIPs ?? (_externalIPs = new InputList<string>());
            set => _externalIPs = value;
        }

        /// <summary>
        /// Set external traffic policy to: "Local" to preserve source IP on providers supporting it. Ref: https://kubernetes.io/docs/tutorials/services/source-ip/#source-ip-for-services-with-typeloadbalancer
        /// </summary>
        [Input("externalTrafficPolicy")]
        public Input<string>? ExternalTrafficPolicy { get; set; }

        /// <summary>
        /// specifies the health check node port (numeric port number) for the service. If healthCheckNodePort isn’t specified, the service controller allocates a port from your cluster’s NodePort range. Ref: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip
        /// </summary>
        [Input("healthCheckNodePort")]
        public Input<int>? HealthCheckNodePort { get; set; }

        /// <summary>
        /// Enables an additional internal load balancer (besides the external one). Annotations are mandatory for the load balancer to come up. Varies with the cloud service.
        /// </summary>
        [Input("internal")]
        public Input<Inputs.ControllerServiceInternalArgs>? Internal { get; set; }

        [Input("labels")]
        private InputMap<ImmutableDictionary<string, string>>? _labels;
        public InputMap<ImmutableDictionary<string, string>> Labels
        {
            get => _labels ?? (_labels = new InputMap<ImmutableDictionary<string, string>>());
            set => _labels = value;
        }

        [Input("loadBalancerIPs")]
        public Input<string>? LoadBalancerIPs { get; set; }

        [Input("loadBalancerSourceRanges")]
        private InputList<string>? _loadBalancerSourceRanges;
        public InputList<string> LoadBalancerSourceRanges
        {
            get => _loadBalancerSourceRanges ?? (_loadBalancerSourceRanges = new InputList<string>());
            set => _loadBalancerSourceRanges = value;
        }

        [Input("nodePorts")]
        public Input<Inputs.ControllerServiceNodePortsArgs>? NodePorts { get; set; }

        [Input("ports")]
        public Input<Inputs.ControllerPortArgs>? Ports { get; set; }

        /// <summary>
        /// Must be either "None" or "ClientIP" if set. Kubernetes will default to "None". Ref: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
        /// </summary>
        [Input("sessionAffinity")]
        public Input<string>? SessionAffinity { get; set; }

        [Input("targetPorts")]
        public Input<Inputs.ControllerPortArgs>? TargetPorts { get; set; }

        [Input("type")]
        public Input<string>? Type { get; set; }

        public ControllerServiceArgs()
        {
        }
    }
}
