// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.ChartIngressNginx.Inputs
{

    /// <summary>
    /// A Release is an instance of a chart running in a Kubernetes cluster.
    /// A Chart is a Helm package. It contains all of the resource definitions necessary to run an application, tool, or service inside of a Kubernetes cluster.
    /// Note - Helm Release is currently in BETA and may change. Use in production environment is discouraged.
    /// </summary>
    public sealed class ReleaseArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// If set, installation process purges chart on fail. `skipAwait` will be disabled automatically if atomic is used.
        /// </summary>
        [Input("atomic")]
        public Input<bool>? Atomic { get; set; }

        /// <summary>
        /// Chart name to be installed. A path may be used.
        /// </summary>
        [Input("chart")]
        public Input<string>? Chart { get; set; }

        /// <summary>
        /// Allow deletion of new resources created in this upgrade when upgrade fails.
        /// </summary>
        [Input("cleanupOnFail")]
        public Input<bool>? CleanupOnFail { get; set; }

        /// <summary>
        /// Create the namespace if it does not exist.
        /// </summary>
        [Input("createNamespace")]
        public Input<bool>? CreateNamespace { get; set; }

        /// <summary>
        /// Run helm dependency update before installing the chart.
        /// </summary>
        [Input("dependencyUpdate")]
        public Input<bool>? DependencyUpdate { get; set; }

        /// <summary>
        /// Add a custom description
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Use chart development versions, too. Equivalent to version '&gt;0.0.0-0'. If `version` is set, this is ignored.
        /// </summary>
        [Input("devel")]
        public Input<bool>? Devel { get; set; }

        /// <summary>
        /// Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook
        /// </summary>
        [Input("disableCRDHooks")]
        public Input<bool>? DisableCRDHooks { get; set; }

        /// <summary>
        /// If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema
        /// </summary>
        [Input("disableOpenapiValidation")]
        public Input<bool>? DisableOpenapiValidation { get; set; }

        /// <summary>
        /// Prevent hooks from running.
        /// </summary>
        [Input("disableWebhooks")]
        public Input<bool>? DisableWebhooks { get; set; }

        /// <summary>
        /// Force resource update through delete/recreate if needed.
        /// </summary>
        [Input("forceUpdate")]
        public Input<bool>? ForceUpdate { get; set; }

        /// <summary>
        /// Location of public keys used for verification. Used only if `verify` is true
        /// </summary>
        [Input("keyring")]
        public Input<string>? Keyring { get; set; }

        /// <summary>
        /// Run helm lint when planning.
        /// </summary>
        [Input("lint")]
        public Input<bool>? Lint { get; set; }

        [Input("manifest")]
        private InputMap<object>? _manifest;

        /// <summary>
        /// The rendered manifests as JSON. Not yet supported.
        /// </summary>
        public InputMap<object> Manifest
        {
            get => _manifest ?? (_manifest = new InputMap<object>());
            set => _manifest = value;
        }

        /// <summary>
        /// Limit the maximum number of revisions saved per release. Use 0 for no limit.
        /// </summary>
        [Input("maxHistory")]
        public Input<int>? MaxHistory { get; set; }

        /// <summary>
        /// Release name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Namespace to install the release into.
        /// </summary>
        [Input("namespace")]
        public Input<string>? Namespace { get; set; }

        /// <summary>
        /// Postrender command to run.
        /// </summary>
        [Input("postrender")]
        public Input<string>? Postrender { get; set; }

        /// <summary>
        /// Perform pods restart during upgrade/rollback.
        /// </summary>
        [Input("recreatePods")]
        public Input<bool>? RecreatePods { get; set; }

        /// <summary>
        /// If set, render subchart notes along with the parent.
        /// </summary>
        [Input("renderSubchartNotes")]
        public Input<bool>? RenderSubchartNotes { get; set; }

        /// <summary>
        /// Re-use the given name, even if that name is already used. This is unsafe in production
        /// </summary>
        [Input("replace")]
        public Input<bool>? Replace { get; set; }

        /// <summary>
        /// Specification defining the Helm chart repository to use.
        /// </summary>
        [Input("repositoryOpts")]
        public Input<Inputs.RepositoryOptsArgs>? RepositoryOpts { get; set; }

        /// <summary>
        /// When upgrading, reset the values to the ones built into the chart.
        /// </summary>
        [Input("resetValues")]
        public Input<bool>? ResetValues { get; set; }

        [Input("resourceNames")]
        private InputMap<ImmutableArray<string>>? _resourceNames;

        /// <summary>
        /// Names of resources created by the release grouped by "kind/version".
        /// </summary>
        public InputMap<ImmutableArray<string>> ResourceNames
        {
            get => _resourceNames ?? (_resourceNames = new InputMap<ImmutableArray<string>>());
            set => _resourceNames = value;
        }

        /// <summary>
        /// When upgrading, reuse the last release's values and merge in any overrides. If 'resetValues' is specified, this is ignored
        /// </summary>
        [Input("reuseValues")]
        public Input<bool>? ReuseValues { get; set; }

        /// <summary>
        /// By default, the provider waits until all resources are in a ready state before marking the release as successful. Setting this to true will skip such await logic.
        /// </summary>
        [Input("skipAwait")]
        public Input<bool>? SkipAwait { get; set; }

        /// <summary>
        /// If set, no CRDs will be installed. By default, CRDs are installed if not already present.
        /// </summary>
        [Input("skipCrds")]
        public Input<bool>? SkipCrds { get; set; }

        /// <summary>
        /// Time in seconds to wait for any individual kubernetes operation.
        /// </summary>
        [Input("timeout")]
        public Input<int>? Timeout { get; set; }

        [Input("valueYamlFiles")]
        private InputList<AssetOrArchive>? _valueYamlFiles;

        /// <summary>
        /// List of assets (raw yaml files). Content is read and merged with values. Not yet supported.
        /// </summary>
        public InputList<AssetOrArchive> ValueYamlFiles
        {
            get => _valueYamlFiles ?? (_valueYamlFiles = new InputList<AssetOrArchive>());
            set => _valueYamlFiles = value;
        }

        [Input("values")]
        private InputMap<object>? _values;

        /// <summary>
        /// Custom values set for the release.
        /// </summary>
        public InputMap<object> Values
        {
            get => _values ?? (_values = new InputMap<object>());
            set => _values = value;
        }

        /// <summary>
        /// Verify the package before installing it.
        /// </summary>
        [Input("verify")]
        public Input<bool>? Verify { get; set; }

        /// <summary>
        /// Specify the exact chart version to install. If this is not specified, the latest version is installed.
        /// </summary>
        [Input("version")]
        public Input<string>? Version { get; set; }

        /// <summary>
        /// Will wait until all Jobs have been completed before marking the release as successful. This is ignored if `skipAwait` is enabled.
        /// </summary>
        [Input("waitForJobs")]
        public Input<bool>? WaitForJobs { get; set; }

        public ReleaseArgs()
        {
        }
    }
}
