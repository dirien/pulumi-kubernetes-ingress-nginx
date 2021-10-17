// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

import * as pulumiKubernetes from "@pulumi/kubernetes";

/**
 * Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer
 */
export class IngressController extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'chart-ingress-nginx:index:IngressController';

    /**
     * Returns true if the given object is an instance of IngressController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IngressController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IngressController.__pulumiType;
    }

    /**
     * Detailed information about the status of the underlying Helm deployment.
     */
    public /*out*/ readonly status!: pulumi.Output<outputs.ReleaseStatus>;

    /**
     * Create a IngressController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IngressControllerArgs, opts?: pulumi.ComponentResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            inputs["controller"] = args ? args.controller : undefined;
            inputs["helmOptions"] = args ? args.helmOptions : undefined;
            inputs["status"] = undefined /*out*/;
        } else {
            inputs["status"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(IngressController.__pulumiType, name, inputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a IngressController resource.
 */
export interface IngressControllerArgs {
    controller?: pulumi.Input<inputs.ControllerArgs>;
    /**
     * Optional Helm Chart release metadata (name, version, chart options, etc).
     */
    helmOptions?: pulumi.Input<inputs.ReleaseArgs>;
}