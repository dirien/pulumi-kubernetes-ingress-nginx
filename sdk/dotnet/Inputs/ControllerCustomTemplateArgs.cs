// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.KubernetesIngressNginx.Inputs
{

    public sealed class ControllerCustomTemplateArgs : global::Pulumi.ResourceArgs
    {
        [Input("configMapKey")]
        public Input<string>? ConfigMapKey { get; set; }

        [Input("configMapName")]
        public Input<string>? ConfigMapName { get; set; }

        public ControllerCustomTemplateArgs()
        {
        }
        public static new ControllerCustomTemplateArgs Empty => new ControllerCustomTemplateArgs();
    }
}
