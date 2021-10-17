// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.ChartIngressNginx.Inputs
{

    public sealed class ControllerPublishServiceArgs : Pulumi.ResourceArgs
    {
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Allows overriding of the publish service to bind to. Must be &lt;namespace&gt;/&lt;service_name&gt;.
        /// </summary>
        [Input("pathOverride")]
        public Input<string>? PathOverride { get; set; }

        public ControllerPublishServiceArgs()
        {
        }
    }
}
