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
    public static readonly __pulumiType = 'kubernetes-ingress-nginx:index:IngressController';

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
            inputs["defaultBackend"] = args ? args.defaultBackend : undefined;
            inputs["dhParam"] = args ? args.dhParam : undefined;
            inputs["fullnameOverride"] = args ? args.fullnameOverride : undefined;
            inputs["helmOptions"] = args ? args.helmOptions : undefined;
            inputs["imagePullSecrets"] = args ? args.imagePullSecrets : undefined;
            inputs["nameOverride"] = args ? args.nameOverride : undefined;
            inputs["podSecurityPolicy"] = args ? args.podSecurityPolicy : undefined;
            inputs["rbac"] = args ? args.rbac : undefined;
            inputs["revisionHistoryLimit"] = args ? args.revisionHistoryLimit : undefined;
            inputs["serviceAccount"] = args ? args.serviceAccount : undefined;
            inputs["tcp"] = args ? args.tcp : undefined;
            inputs["udp"] = args ? args.udp : undefined;
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
     * Default 404 backend.
     */
    defaultBackend?: pulumi.Input<inputs.ControllerDefaultBackendArgs>;
    /**
     * A base64ed Diffie-Hellman parameter. This can be generated with: openssl dhparam 4096 2> /dev/null | base64 Ref: https://github.com/kubernetes/ingress-nginx/tree/main/docs/examples/customization/ssl-dh-param.
     */
    dhParam?: pulumi.Input<string>;
    /**
     * Overrides for generated resource names.
     */
    fullnameOverride?: pulumi.Input<string>;
    /**
     * HelmOptions is an escape hatch that lets the end user control any aspect of the Helm deployment. This exposes the entirety of the underlying Helm Release component args.
     */
    helmOptions?: pulumi.Input<inputs.ReleaseArgs>;
    /**
     * Optional array of imagePullSecrets containing private registry credentials Ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/.
     */
    imagePullSecrets?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.LocalObjectReference>[]>;
    /**
     * Overrides for generated resource names.
     */
    nameOverride?: pulumi.Input<string>;
    /**
     * If true, create & use Pod Security Policy resources https://kubernetes.io/docs/concepts/policy/pod-security-policy/
     */
    podSecurityPolicy?: pulumi.Input<inputs.ControllerPodSecurityPolicyArgs>;
    /**
     * Enable RBAC as per https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/rbac.md and https://github.com/kubernetes/ingress-nginx/issues/266
     */
    rbac?: pulumi.Input<inputs.ControllerRBACArgs>;
    /**
     * Rollback limit.
     */
    revisionHistoryLimit?: pulumi.Input<number>;
    serviceAccount?: pulumi.Input<inputs.ControllerServiceAccountArgs>;
    /**
     * TCP service key:value pairs Ref: https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/exposing-tcp-udp-services.md.
     */
    tcp?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * UDP service key:value pairs Ref: https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/exposing-tcp-udp-services.md.
     */
    udp?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
}
