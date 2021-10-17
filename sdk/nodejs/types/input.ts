// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

import * as pulumiKubernetes from "@pulumi/kubernetes";

export interface AutoscalingArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    controllerAutoscalingBehavior?: pulumi.Input<inputs.AutoscalingBehaviorArgs>;
    enabled?: pulumi.Input<boolean>;
    maxReplicas?: pulumi.Input<number>;
    minReplicas?: pulumi.Input<number>;
    targetCPUUtilizationPercentage?: pulumi.Input<number>;
    targetMemoryUtilizationPercentage?: pulumi.Input<number>;
}

export interface AutoscalingBehaviorArgs {
    scaleDown?: pulumi.Input<inputs.AutoscalingBehaviorScalingArgs>;
    scaleUp?: pulumi.Input<inputs.AutoscalingBehaviorScalingArgs>;
}

export interface AutoscalingBehaviorScalingArgs {
    policies?: pulumi.Input<pulumi.Input<inputs.AutoscalingBehaviorScalingPolicyArgs>[]>;
    stabilizationWindowSeconds?: pulumi.Input<number>;
}

export interface AutoscalingBehaviorScalingPolicyArgs {
    periodSeconds?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
    value?: pulumi.Input<number>;
}

export interface AutoscalingTemplateArgs {
    pods?: pulumi.Input<inputs.AutoscalingTemplatePodsArgs>;
    type?: pulumi.Input<string>;
}

export interface AutoscalingTemplatePodsArgs {
    metric?: pulumi.Input<inputs.AutoscalingTemplatePodsMetricArgs>;
    target?: pulumi.Input<inputs.AutoscalingTemplatePodsTargetArgs>;
}

export interface AutoscalingTemplatePodsMetricArgs {
    name?: pulumi.Input<string>;
}

export interface AutoscalingTemplatePodsTargetArgs {
    averageValue?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

export interface ContollerAdmissionWebhooksArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    certificate?: pulumi.Input<string>;
    createSecretJob?: pulumi.Input<inputs.ControllerAdmissionWebhooksCreateSecretJobArgs>;
    enabled?: pulumi.Input<boolean>;
    /**
     * Use an existing PSP instead of creating one.
     */
    existingPsp?: pulumi.Input<string>;
    failurePolicy?: pulumi.Input<string>;
    key?: pulumi.Input<string>;
    namespaceSelector?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    objectSelector?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    patch?: pulumi.Input<inputs.ControllerAdmissionWebhooksPatchArgs>;
    patchWebhookJob?: pulumi.Input<inputs.ControllerAdmissionWebhooksPatchWebhbookJobArgs>;
    port?: pulumi.Input<number>;
    service?: pulumi.Input<inputs.ControllerAdmissionWebhooksServiceArgs>;
    timeoutSeconds?: pulumi.Input<number>;
}

export interface ControllerArgs {
    /**
     * Will add custom headers before sending response traffic to the client according to: https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#add-headers.
     */
    addHeaders?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    admissionWebhooks?: pulumi.Input<inputs.ContollerAdmissionWebhooksArgs>;
    /**
     * Affinity and anti-affinity Ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity.
     */
    affinity?: pulumi.Input<pulumiKubernetes.types.input.core.v1.Affinity>;
    /**
     * This configuration defines if Ingress Controller should allow users to set their own *-snippet annotations, otherwise this is forbidden / dropped when users add those annotations. Global snippets in ConfigMap are still respected.
     */
    allowSnippetAnnotations?: pulumi.Input<boolean>;
    /**
     * Annotations to be added to the controller Deployment or DaemonSet.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Mutually exclusive with keda autoscaling.
     */
    autoscaling?: pulumi.Input<inputs.AutoscalingArgs>;
    /**
     * Custom or additional autoscaling metrics ref: https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#support-for-custom-metrics
     */
    autoscalingTemplate?: pulumi.Input<pulumi.Input<inputs.AutoscalingTemplateArgs>[]>;
    /**
     * Will add custom configuration options to Nginx https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/.
     */
    config?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * Annotations to be added to the controller config configuration configmap.
     */
    configAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * Allows customization of the configmap / nginx-configmap namespace.
     */
    configMapNamespace?: pulumi.Input<string>;
    /**
     * Configures the controller container name.
     */
    containerName?: pulumi.Input<string>;
    /**
     * Configures the ports the nginx-controller listens on.
     */
    containerPort?: pulumi.Input<inputs.ControllerPortArgs>;
    /**
     * Override NGINX template.
     */
    customTemplate?: pulumi.Input<inputs.ControllerCustomTemplateArgs>;
    /**
     * Optionally customize the pod dnsConfig.
     */
    dnsConfig?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * Optionally change this to ClusterFirstWithHostNet in case you have 'hostNetwork: true'. By default, while using host network, name resolution uses the host's DNS. If you wish nginx-controller to keep resolving names inside the k8s network, use ClusterFirstWithHostNet.
     */
    dnsPolicy?: pulumi.Input<string>;
    /**
     * Election ID to use for status update.
     */
    electionID?: pulumi.Input<string>;
    /**
     * Enable mimalloc as a drop-in replacement for malloc. ref: https://github.com/microsoft/mimalloc.
     */
    enableMimalloc?: pulumi.Input<boolean>;
    /**
     * Use an existing PSP instead of creating one.
     */
    existingPsp?: pulumi.Input<string>;
    /**
     * Additional command line arguments to pass to nginx-ingress-controller E.g. to specify the default SSL certificate you can use `default-ssl-certificate: "<namespace>/<secret_name>"`.
     */
    extraArgs?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * Additional containers to be added to the controller pod. See https://github.com/lemonldap-ng-controller/lemonldap-ng-controller as example.
     */
    extraContainers?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.Container>[]>;
    /**
     * Additional environment variables to set.
     */
    extraEnvs?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.EnvVar>[]>;
    /**
     * Containers, which are run before the app containers are started. - name: init-myservice   image: busybox   command: ['sh', '-c', 'until nslookup myservice; do echo waiting for myservice; sleep 2; done;']
     */
    extraInitContainers?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.Container>[]>;
    /**
     * Additional volumeMounts to the controller main container.  - name: copy-portal-skins    mountPath: /var/lib/lemonldap-ng/portal/skins
     */
    extraVolumeMounts?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.VolumeMount>[]>;
    /**
     * Additional volumes to the controller pod.  - name: copy-portal-skins    emptyDir: {}
     */
    extraVolumes?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.Volume>[]>;
    /**
     * Path of the health check endpoint. All requests received on the port defined by the healthz-port parameter are forwarded internally to this path.
     */
    healthCheckPath?: pulumi.Input<string>;
    /**
     * Address to bind the health check endpoint. It is better to set this option to the internal node address if the ingress nginx controller is running in the hostNetwork: true mode.
     */
    heathCheckHost?: pulumi.Input<string>;
    /**
     * Required for use with CNI based kubernetes installations (such as ones set up by kubeadm), since CNI and hostport don't mix yet. Can be deprecated once https://github.com/kubernetes/kubernetes/issues/23920 is merged.
     */
    hostNetwork?: pulumi.Input<boolean>;
    /**
     * Use host ports 80 and 443. Disabled by default.
     */
    hostPort?: pulumi.Input<inputs.ControllerHostPortArgs>;
    /**
     * Optionally customize the pod hostname.
     */
    hostname?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    image?: pulumi.Input<inputs.ControllerImageArgs>;
    /**
     * Process IngressClass per name (additionally as per spec.controller).
     */
    ingressClassByName?: pulumi.Input<boolean>;
    /**
     * This section refers to the creation of the IngressClass resource. IngressClass resources are supported since k8s >= 1.18 and required since k8s >= 1.19
     */
    ingressClassResource?: pulumi.Input<inputs.ControllerIngressClassResourceArgs>;
    /**
     * Mutually exclusive with hpa autoscaling.
     */
    keda?: pulumi.Input<inputs.KedaArgs>;
    /**
     * DaemonSet or Deployment.
     */
    kind?: pulumi.Input<string>;
    /**
     * Node tolerations for server scheduling to nodes with taints Ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Improve connection draining when ingress controller pod is deleted using a lifecycle hook: With this new hook, we increased the default terminationGracePeriodSeconds from 30 seconds to 300, allowing the draining of connections up to five minutes. If the active connections end before that, the pod will terminate gracefully at that time. To effectively take advantage of this feature, the Configmap feature worker-shutdown-timeout new value is 240s instead of 10s.
     */
    lifecycle?: pulumi.Input<pulumiKubernetes.types.input.core.v1.Lifecycle>;
    /**
     * Liveness probe values Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes.
     */
    livenessProbe?: pulumi.Input<pulumiKubernetes.types.input.core.v1.Probe>;
    /**
     * Maxmind license key to download GeoLite2 Databases https://blog.maxmind.com/2019/12/18/significant-changes-to-accessing-and-using-geolite2-databases.
     */
    maxmindLicenseKey?: pulumi.Input<string>;
    metrics?: pulumi.Input<inputs.ControllerMetricsArgs>;
    minAvailable?: pulumi.Input<number>;
    /**
     * minReadySeconds to avoid killing pods before we are ready.
     */
    minReadySeconds?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    /**
     * Node labels for controller pod assignment Ref: https://kubernetes.io/docs/user-guide/node-selection/.
     */
    nodeSelector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Annotations to be added to controller pods.
     */
    podAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * labels to add to the pod container metadata.
     */
    podLabels?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * Security Context policies for controller pods.
     */
    podSecurityContext?: pulumi.Input<pulumiKubernetes.types.input.core.v1.PodSecurityContext>;
    priorityClassName?: pulumi.Input<string>;
    /**
     * Will add custom headers before sending traffic to backends according to https://github.com/kubernetes/ingress-nginx/tree/main/docs/examples/customization/custom-headers.
     */
    proxySetHeaders?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * Allows customization of the source of the IP address or FQDN to report in the ingress status field. By default, it reads the information provided by the service. If disable, the status field reports the IP address of the node or nodes where an ingress controller pod is running.
     */
    publishService?: pulumi.Input<inputs.ControllerPublishServiceArgs>;
    /**
     * Readiness probe values Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes.
     */
    readinessProbe?: pulumi.Input<pulumiKubernetes.types.input.core.v1.Probe>;
    replicaCount?: pulumi.Input<number>;
    /**
     * Bare-metal considerations via the host network https://kubernetes.github.io/ingress-nginx/deploy/baremetal/#via-the-host-network Ingress status was blank because there is no Service exposing the NGINX Ingress controller in a configuration using the host network, the default --publish-service flag used in standard cloud setups does not apply.
     */
    reportNodeInternalIp?: pulumi.Input<boolean>;
    /**
     * Define requests resources to avoid probe issues due to CPU utilization in busy nodes ref: https://github.com/kubernetes/ingress-nginx/issues/4735#issuecomment-551204903 Ideally, there should be no limits. https://engineering.indeedblog.com/blog/2019/12/cpu-throttling-regression-fix/
     */
    resources?: pulumi.Input<pulumiKubernetes.types.input.core.v1.ResourceRequirements>;
    /**
     * Limit the scope of the controller.
     */
    scope?: pulumi.Input<inputs.ControllerScopeArgs>;
    service?: pulumi.Input<inputs.ControllerServiceArgs>;
    /**
     * Startup probe values Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes.
     */
    startupProbe?: pulumi.Input<pulumiKubernetes.types.input.core.v1.Probe>;
    /**
     * See https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/ for notes on enabling and using sysctls.
     */
    sysctls?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * Allows customization of the tcp-services-configmap.
     */
    tcp?: pulumi.Input<inputs.ControllerTcpArgs>;
    /**
     * How long to wait for the drain of connections.
     */
    terminateGracePeriodSeconds?: pulumi.Input<number>;
    /**
     * Topology spread constraints rely on node labels to identify the topology domain(s) that each Node is in. Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/.
     */
    topologySpreadConstraints?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.TopologySpreadConstraint>[]>;
    udp?: pulumi.Input<inputs.ControllerUdpArgs>;
    /**
     * The update strategy to apply to the Deployment or DaemonSet.
     */
    updateStrategy?: pulumi.Input<inputs.ControllerUpdateStrategyArgs>;
    /**
     * Process Ingress objects without ingressClass annotation/ingressClassName field. Overrides value for --watch-ingress-without-class flag of the controller binary. Defaults to false.
     */
    watchIngressWithoutClass?: pulumi.Input<boolean>;
}

export interface ControllerAdmissionWebhooksCreateSecretJobArgs {
    resources?: pulumi.Input<pulumiKubernetes.types.input.core.v1.ResourceRequirements>;
}

export interface ControllerAdmissionWebhooksPatchArgs {
    enabled?: pulumi.Input<boolean>;
    image?: pulumi.Input<inputs.ControllerImageArgs>;
    nodeSelector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    podAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * Provide a priority class name to the webhook patching job.
     */
    priorityClassName?: pulumi.Input<string>;
    runAsUser?: pulumi.Input<number>;
    tolerations?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.Toleration>[]>;
}

export interface ControllerAdmissionWebhooksPatchWebhbookJobArgs {
    resources?: pulumi.Input<pulumiKubernetes.types.input.core.v1.ResourceRequirements>;
}

export interface ControllerAdmissionWebhooksServiceArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    clusterIP?: pulumi.Input<string>;
    externalIPs?: pulumi.Input<pulumi.Input<string>[]>;
    loadBalancerIPs?: pulumi.Input<string>;
    loadBalancerSourceRanges?: pulumi.Input<pulumi.Input<string>[]>;
    servicePort?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

export interface ControllerCustomTemplateArgs {
    configMapKey?: pulumi.Input<string>;
    configMapName?: pulumi.Input<string>;
}

export interface ControllerHostPortArgs {
    enabled?: pulumi.Input<boolean>;
    ports?: pulumi.Input<inputs.ControllerHostPortPortsArgs>;
}

export interface ControllerHostPortPortsArgs {
    http?: pulumi.Input<number>;
    https?: pulumi.Input<number>;
}

export interface ControllerImageArgs {
    allowPrivilegeEscalation?: pulumi.Input<boolean>;
    digest?: pulumi.Input<string>;
    image?: pulumi.Input<string>;
    pullPolicy?: pulumi.Input<string>;
    readOnlyRootFilesystem?: pulumi.Input<boolean>;
    registry?: pulumi.Input<string>;
    /**
     * for backwards compatibility consider setting the full image url via the repository value below use *either* current default registry/image or repository format or installing will fail.
     */
    repository?: pulumi.Input<string>;
    runAsNonRoot?: pulumi.Input<boolean>;
    runAsUser?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
}

export interface ControllerIngressClassResourceArgs {
    controllerValue?: pulumi.Input<string>;
    default?: pulumi.Input<boolean>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    /**
     * Parameters is a link to a custom resource containing additional configuration for the controller. This is optional if the controller does not require extra parameters.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
}

export interface ControllerMetricsArgs {
    enabled?: pulumi.Input<boolean>;
    /**
     * if this port is changed, change healthz-port: in extraArgs: accordingly.
     */
    port?: pulumi.Input<number>;
    prometheusRule?: pulumi.Input<inputs.ControllerMetricsPrometheusRulesArgs>;
    service?: pulumi.Input<inputs.ControllerMetricsServiceArgs>;
    serviceMonitor?: pulumi.Input<inputs.ControllerMetricsServiceMonitorArgs>;
}

export interface ControllerMetricsPrometheusRulesArgs {
    additionalLabels?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    enabled?: pulumi.Input<boolean>;
    namespace?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<{[key: string]: pulumi.Input<string>}>[]>;
}

export interface ControllerMetricsServiceArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    clusterIP?: pulumi.Input<string>;
    externalIPs?: pulumi.Input<pulumi.Input<string>[]>;
    externalTrafficPolicy?: pulumi.Input<string>;
    loadBalancerIPs?: pulumi.Input<string>;
    loadBalancerSourceRanges?: pulumi.Input<pulumi.Input<string>[]>;
    nodePort?: pulumi.Input<string>;
    servicePort?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

export interface ControllerMetricsServiceMonitorArgs {
    additionalLabels?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    enabled?: pulumi.Input<boolean>;
    honorLabels?: pulumi.Input<boolean>;
    /**
     * The label to use to retrieve the job name from.
     */
    jobLabel?: pulumi.Input<string>;
    metricRelabelings?: pulumi.Input<pulumi.Input<string>[]>;
    namespace?: pulumi.Input<string>;
    namespaceSelector?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    scrapeInterval?: pulumi.Input<string>;
    targetLabels?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ControllerPortArgs {
    http?: pulumi.Input<number>;
    https?: pulumi.Input<number>;
}

export interface ControllerPublishServiceArgs {
    enabled?: pulumi.Input<boolean>;
    /**
     * Allows overriding of the publish service to bind to. Must be <namespace>/<service_name>.
     */
    pathOverride?: pulumi.Input<string>;
}

export interface ControllerRollingUpdateArgs {
    maxUnavailable?: pulumi.Input<number>;
}

export interface ControllerScopeArgs {
    enabled?: pulumi.Input<boolean>;
    namespace?: pulumi.Input<string>;
}

export interface ControllerServiceArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    clusterIP?: pulumi.Input<string>;
    enableHttp?: pulumi.Input<boolean>;
    enableHttps?: pulumi.Input<boolean>;
    enabled?: pulumi.Input<boolean>;
    /**
     * List of IP addresses at which the controller services are available Ref: https://kubernetes.io/docs/user-guide/services/#external-ips
     */
    externalIPs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set external traffic policy to: "Local" to preserve source IP on providers supporting it. Ref: https://kubernetes.io/docs/tutorials/services/source-ip/#source-ip-for-services-with-typeloadbalancer
     */
    externalTrafficPolicy?: pulumi.Input<string>;
    /**
     * specifies the health check node port (numeric port number) for the service. If healthCheckNodePort isn’t specified, the service controller allocates a port from your cluster’s NodePort range. Ref: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip
     */
    healthCheckNodePort?: pulumi.Input<number>;
    /**
     * Enables an additional internal load balancer (besides the external one). Annotations are mandatory for the load balancer to come up. Varies with the cloud service.
     */
    internal?: pulumi.Input<inputs.ControllerServiceInternalArgs>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    loadBalancerIPs?: pulumi.Input<string>;
    loadBalancerSourceRanges?: pulumi.Input<pulumi.Input<string>[]>;
    nodePorts?: pulumi.Input<inputs.ControllerServiceNodePortsArgs>;
    ports?: pulumi.Input<inputs.ControllerPortArgs>;
    /**
     * Must be either "None" or "ClientIP" if set. Kubernetes will default to "None". Ref: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     */
    sessionAffinity?: pulumi.Input<string>;
    targetPorts?: pulumi.Input<inputs.ControllerPortArgs>;
    type?: pulumi.Input<string>;
}

export interface ControllerServiceInternalArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    enabled?: pulumi.Input<boolean>;
    /**
     * Set external traffic policy to: "Local" to preserve source IP on providers supporting it. Ref: https://kubernetes.io/docs/tutorials/services/source-ip/#source-ip-for-services-with-typeloadbalancer
     */
    externalTrafficPolicy?: pulumi.Input<string>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    loadBalancerIPs?: pulumi.Input<string>;
    /**
     * Restrict access For LoadBalancer service. Defaults to 0.0.0.0/0.
     */
    loadBalancerSourceRanges?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ControllerServiceNodePortsArgs {
    http?: pulumi.Input<string>;
    https?: pulumi.Input<string>;
    tcp?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    udp?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
}

export interface ControllerTcpArgs {
    /**
     * Annotations to be added to the tcp config configmap.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    configMapNamespace?: pulumi.Input<string>;
}

export interface ControllerUdpArgs {
    /**
     * Annotations to be added to the udp config configmap.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    configMapNamespace?: pulumi.Input<string>;
}

export interface ControllerUpdateStrategyArgs {
    rollingUpdate?: pulumi.Input<inputs.ControllerRollingUpdateArgs>;
    type?: pulumi.Input<string>;
}

export interface KedaArgs {
    /**
     * apiVersion changes with keda 1.x vs 2.x: 2.x = keda.sh/v1alpha1, 1.x = keda.k8s.io/v1alpha1.
     */
    apiVersion?: pulumi.Input<string>;
    behavior?: pulumi.Input<inputs.AutoscalingBehaviorArgs>;
    cooldownPeriod?: pulumi.Input<number>;
    enabled?: pulumi.Input<boolean>;
    maxReplicas?: pulumi.Input<number>;
    minReplicas?: pulumi.Input<number>;
    pollingInterval?: pulumi.Input<number>;
    restoreToOriginalReplicaCount?: pulumi.Input<boolean>;
    scaledObject?: pulumi.Input<inputs.KedaScaledObjectArgs>;
    triggers?: pulumi.Input<pulumi.Input<inputs.KedaTriggerArgs>[]>;
}

export interface KedaScaledObjectArgs {
    /**
     * Custom annotations for ScaledObject resource.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface KedaTriggerArgs {
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    type?: pulumi.Input<string>;
}

/**
 * A Release is an instance of a chart running in a Kubernetes cluster.
 * A Chart is a Helm package. It contains all of the resource definitions necessary to run an application, tool, or service inside of a Kubernetes cluster.
 * Note - Helm Release is currently in BETA and may change. Use in production environment is discouraged.
 */
export interface ReleaseArgs {
    /**
     * If set, installation process purges chart on fail. `skipAwait` will be disabled automatically if atomic is used.
     */
    atomic?: pulumi.Input<boolean>;
    /**
     * Chart name to be installed. A path may be used.
     */
    chart?: pulumi.Input<string>;
    /**
     * Allow deletion of new resources created in this upgrade when upgrade fails.
     */
    cleanupOnFail?: pulumi.Input<boolean>;
    /**
     * Create the namespace if it does not exist.
     */
    createNamespace?: pulumi.Input<boolean>;
    /**
     * Run helm dependency update before installing the chart.
     */
    dependencyUpdate?: pulumi.Input<boolean>;
    /**
     * Add a custom description
     */
    description?: pulumi.Input<string>;
    /**
     * Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.
     */
    devel?: pulumi.Input<boolean>;
    /**
     * Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook
     */
    disableCRDHooks?: pulumi.Input<boolean>;
    /**
     * If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema
     */
    disableOpenapiValidation?: pulumi.Input<boolean>;
    /**
     * Prevent hooks from running.
     */
    disableWebhooks?: pulumi.Input<boolean>;
    /**
     * Force resource update through delete/recreate if needed.
     */
    forceUpdate?: pulumi.Input<boolean>;
    /**
     * Location of public keys used for verification. Used only if `verify` is true
     */
    keyring?: pulumi.Input<string>;
    /**
     * Run helm lint when planning.
     */
    lint?: pulumi.Input<boolean>;
    /**
     * The rendered manifests as JSON. Not yet supported.
     */
    manifest?: pulumi.Input<{[key: string]: any}>;
    /**
     * Limit the maximum number of revisions saved per release. Use 0 for no limit.
     */
    maxHistory?: pulumi.Input<number>;
    /**
     * Release name.
     */
    name?: pulumi.Input<string>;
    /**
     * Namespace to install the release into.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Postrender command to run.
     */
    postrender?: pulumi.Input<string>;
    /**
     * Perform pods restart during upgrade/rollback.
     */
    recreatePods?: pulumi.Input<boolean>;
    /**
     * If set, render subchart notes along with the parent.
     */
    renderSubchartNotes?: pulumi.Input<boolean>;
    /**
     * Re-use the given name, even if that name is already used. This is unsafe in production
     */
    replace?: pulumi.Input<boolean>;
    /**
     * Specification defining the Helm chart repository to use.
     */
    repositoryOpts?: pulumi.Input<inputs.RepositoryOptsArgs>;
    /**
     * When upgrading, reset the values to the ones built into the chart.
     */
    resetValues?: pulumi.Input<boolean>;
    /**
     * Names of resources created by the release grouped by "kind/version".
     */
    resourceNames?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    /**
     * When upgrading, reuse the last release's values and merge in any overrides. If 'resetValues' is specified, this is ignored
     */
    reuseValues?: pulumi.Input<boolean>;
    /**
     * By default, the provider waits until all resources are in a ready state before marking the release as successful. Setting this to true will skip such await logic.
     */
    skipAwait?: pulumi.Input<boolean>;
    /**
     * If set, no CRDs will be installed. By default, CRDs are installed if not already present.
     */
    skipCrds?: pulumi.Input<boolean>;
    /**
     * Time in seconds to wait for any individual kubernetes operation.
     */
    timeout?: pulumi.Input<number>;
    /**
     * List of assets (raw yaml files). Content is read and merged with values. Not yet supported.
     */
    valueYamlFiles?: pulumi.Input<pulumi.Input<pulumi.asset.Asset | pulumi.asset.Archive>[]>;
    /**
     * Custom values set for the release.
     */
    values?: pulumi.Input<{[key: string]: any}>;
    /**
     * Verify the package before installing it.
     */
    verify?: pulumi.Input<boolean>;
    /**
     * Specify the exact chart version to install. If this is not specified, the latest version is installed.
     */
    version?: pulumi.Input<string>;
    /**
     * Will wait until all Jobs have been completed before marking the release as successful. This is ignored if `skipAwait` is enabled.
     */
    waitForJobs?: pulumi.Input<boolean>;
}

/**
 * Specification defining the Helm chart repository to use.
 */
export interface RepositoryOptsArgs {
    /**
     * The Repository's CA File
     */
    caFile?: pulumi.Input<string>;
    /**
     * The repository's cert file
     */
    certFile?: pulumi.Input<string>;
    /**
     * The repository's cert key file
     */
    keyFile?: pulumi.Input<string>;
    /**
     * Password for HTTP basic authentication
     */
    password?: pulumi.Input<string>;
    /**
     * Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.
     */
    repo?: pulumi.Input<string>;
    /**
     * Username for HTTP basic authentication
     */
    username?: pulumi.Input<string>;
}
