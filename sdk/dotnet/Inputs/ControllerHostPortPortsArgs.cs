// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.KubernetesIngressNginx.Inputs
{

    public sealed class ControllerHostPortPortsArgs : Pulumi.ResourceArgs
    {
        [Input("http")]
        public Input<int>? Http { get; set; }

        [Input("https")]
        public Input<int>? Https { get; set; }

        public ControllerHostPortPortsArgs()
        {
        }
    }
}
