import Gigya from './gigya';
import FidmSamlIdp from './fidm.saml.idp';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
import SamlConfig from './interfaces/saml-config';
import ExternalIdP from './interfaces/external-idp';
export * from './fidm.saml.idp';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export * from './interfaces/saml-config';
export * from './interfaces/external-idp';
export declare class FidmSaml {
    protected gigya: Gigya;
    readonly idp: FidmSamlIdp;
    constructor(gigya: Gigya);
    /**
     * This API deletes a SAML Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.delIdP+REST
     */
    delIdP(params: BaseParams & FidmSamlDelIdPParams): Promise<GigyaResponse>;
    /**
     * This API retrieves the Gigya site configuration for SAML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.getConfig+REST
     */
    getConfig(params: BaseParams & FidmSamlGetConfigParams): Promise<GigyaResponse & FidmSamlGetConfigResponse>;
    /**
     * This API retrieves all the SAML IdP configuration objects that are defined for the site.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.getRegisteredIdPs+REST
     */
    getRegisteredIdPs(params?: BaseParams): Promise<GigyaResponse & FidmSamlGetRegisteredIdPsResponse>;
    /**
     * This API imports a SAML Identity Provider (IdP) configuration from a SAML metadata XML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.importIdPMetadata+REST
     */
    importIdPMetadata(params: BaseParams & FidmSamlImportIdPMetadataParams): Promise<GigyaResponse & FidmSamlImportIdPMetadataResponse>;
    /**
     * This API updates or registers a SAML configuration for a specific Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.registerIdP+REST
     */
    registerIdP(params: BaseParams & FidmSamlRegisterIdPParams): Promise<GigyaResponse>;
    /**
     * This API updates the Gigya SAML site configuration.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.setConfig+REST
     */
    setConfig(params: BaseParams & FidmSamlSetConfigParams): Promise<GigyaResponse>;
}
export default FidmSaml;
export interface FidmSamlDelIdPParams {
    name: string;
}
export interface FidmSamlGetConfigParams {
    idpName?: string;
}
export interface FidmSamlGetConfigResponse {
    config: SamlConfig;
}
export interface FidmSamlGetRegisteredIdPsResponse {
    configs: Array<ExternalIdP>;
}
export interface FidmSamlImportIdPMetadataParams {
    metadata?: string;
    url?: string;
    saveConfiguration?: boolean;
    name?: string;
}
export interface FidmSamlImportIdPMetadataResponse {
    config: ExternalIdP;
}
export interface FidmSamlRegisterIdPParams {
    config: ExternalIdP;
}
export interface FidmSamlSetConfigParams {
    config: SamlConfig;
}
