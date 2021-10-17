// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.KubernetesIngressNginx
{
    /// <summary>
    /// Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer
    /// </summary>
    [KubernetesIngressNginxResourceType("kubernetes-ingress-nginx:index:IngressController")]
    public partial class IngressController : Pulumi.ComponentResource
    {
        /// <summary>
        /// Detailed information about the status of the underlying Helm deployment.
        /// </summary>
        [Output("status")]
        public Output<Outputs.ReleaseStatus> Status { get; private set; } = null!;


        /// <summary>
        /// Create a IngressController resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IngressController(string name, IngressControllerArgs? args = null, ComponentResourceOptions? options = null)
            : base("kubernetes-ingress-nginx:index:IngressController", name, args ?? new IngressControllerArgs(), MakeResourceOptions(options, ""), remote: true)
        {
        }

        private static ComponentResourceOptions MakeResourceOptions(ComponentResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new ComponentResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = ComponentResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
    }

    public sealed class IngressControllerArgs : Pulumi.ResourceArgs
    {
        [Input("controller")]
        public Input<Inputs.ControllerArgs>? Controller { get; set; }

        /// <summary>
        /// Default 404 backend.
        /// </summary>
        [Input("defaultBackend")]
        public Input<Inputs.ControllerDefaultBackendArgs>? DefaultBackend { get; set; }

        /// <summary>
        /// A base64ed Diffie-Hellman parameter. This can be generated with: openssl dhparam 4096 2&gt; /dev/null | base64 Ref: https://github.com/kubernetes/ingress-nginx/tree/main/docs/examples/customization/ssl-dh-param.
        /// </summary>
        [Input("dhParam")]
        public Input<string>? DhParam { get; set; }

        /// <summary>
        /// Overrides for generated resource names.
        /// </summary>
        [Input("fullnameOverride")]
        public Input<string>? FullnameOverride { get; set; }

        /// <summary>
        /// HelmOptions is an escape hatch that lets the end user control any aspect of the Helm deployment. This exposes the entirety of the underlying Helm Release component args.
        /// </summary>
        [Input("helmOptions")]
        public Input<Inputs.ReleaseArgs>? HelmOptions { get; set; }

        [Input("imagePullSecrets")]
        private InputList<Pulumi.Kubernetes.Types.Inputs.Core.V1.LocalObjectReferenceArgs>? _imagePullSecrets;

        /// <summary>
        /// Optional array of imagePullSecrets containing private registry credentials Ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/.
        /// </summary>
        public InputList<Pulumi.Kubernetes.Types.Inputs.Core.V1.LocalObjectReferenceArgs> ImagePullSecrets
        {
            get => _imagePullSecrets ?? (_imagePullSecrets = new InputList<Pulumi.Kubernetes.Types.Inputs.Core.V1.LocalObjectReferenceArgs>());
            set => _imagePullSecrets = value;
        }

        /// <summary>
        /// Overrides for generated resource names.
        /// </summary>
        [Input("nameOverride")]
        public Input<string>? NameOverride { get; set; }

        /// <summary>
        /// If true, create &amp; use Pod Security Policy resources https://kubernetes.io/docs/concepts/policy/pod-security-policy/
        /// </summary>
        [Input("podSecurityPolicy")]
        public Input<Inputs.ControllerPodSecurityPolicyArgs>? PodSecurityPolicy { get; set; }

        /// <summary>
        /// Enable RBAC as per https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/rbac.md and https://github.com/kubernetes/ingress-nginx/issues/266
        /// </summary>
        [Input("rbac")]
        public Input<Inputs.ControllerRBACArgs>? Rbac { get; set; }

        /// <summary>
        /// Rollback limit.
        /// </summary>
        [Input("revisionHistoryLimit")]
        public Input<int>? RevisionHistoryLimit { get; set; }

        [Input("serviceAccount")]
        public Input<Inputs.ControllerServiceAccountArgs>? ServiceAccount { get; set; }

        [Input("tcp")]
        private InputMap<ImmutableDictionary<string, string>>? _tcp;

        /// <summary>
        /// TCP service key:value pairs Ref: https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/exposing-tcp-udp-services.md.
        /// </summary>
        public InputMap<ImmutableDictionary<string, string>> Tcp
        {
            get => _tcp ?? (_tcp = new InputMap<ImmutableDictionary<string, string>>());
            set => _tcp = value;
        }

        [Input("udp")]
        private InputMap<ImmutableDictionary<string, string>>? _udp;

        /// <summary>
        /// UDP service key:value pairs Ref: https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/exposing-tcp-udp-services.md.
        /// </summary>
        public InputMap<ImmutableDictionary<string, string>> Udp
        {
            get => _udp ?? (_udp = new InputMap<ImmutableDictionary<string, string>>());
            set => _udp = value;
        }

        public IngressControllerArgs()
        {
        }
    }
}
