/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "beanconqueror";

export enum Roast {
  /** UNKNOWN_ROAST - UNKOWN */
  UNKNOWN_ROAST = 0,
  /** CINNAMON_ROAST - LIGHT */
  CINNAMON_ROAST = 1,
  AMERICAN_ROAST = 2,
  NEW_ENGLAND_ROAST = 3,
  HALF_CITY_ROAST = 4,
  MODERATE_LIGHT_ROAST = 5,
  /** CITY_ROAST - MEDIUM */
  CITY_ROAST = 6,
  CITY_PLUS_ROAST = 7,
  FULL_CITY_ROAST = 8,
  /** FULL_CITY_PLUS_ROAST - DARK */
  FULL_CITY_PLUS_ROAST = 9,
  ITALIAN_ROAST = 10,
  VIEANNA_ROAST = 11,
  FRENCH_ROAST = 12,
  CUSTOM_ROAST = 13,
  UNRECOGNIZED = -1,
}

export function roastFromJSON(object: any): Roast {
  switch (object) {
    case 0:
    case "UNKNOWN_ROAST":
      return Roast.UNKNOWN_ROAST;
    case 1:
    case "CINNAMON_ROAST":
      return Roast.CINNAMON_ROAST;
    case 2:
    case "AMERICAN_ROAST":
      return Roast.AMERICAN_ROAST;
    case 3:
    case "NEW_ENGLAND_ROAST":
      return Roast.NEW_ENGLAND_ROAST;
    case 4:
    case "HALF_CITY_ROAST":
      return Roast.HALF_CITY_ROAST;
    case 5:
    case "MODERATE_LIGHT_ROAST":
      return Roast.MODERATE_LIGHT_ROAST;
    case 6:
    case "CITY_ROAST":
      return Roast.CITY_ROAST;
    case 7:
    case "CITY_PLUS_ROAST":
      return Roast.CITY_PLUS_ROAST;
    case 8:
    case "FULL_CITY_ROAST":
      return Roast.FULL_CITY_ROAST;
    case 9:
    case "FULL_CITY_PLUS_ROAST":
      return Roast.FULL_CITY_PLUS_ROAST;
    case 10:
    case "ITALIAN_ROAST":
      return Roast.ITALIAN_ROAST;
    case 11:
    case "VIEANNA_ROAST":
      return Roast.VIEANNA_ROAST;
    case 12:
    case "FRENCH_ROAST":
      return Roast.FRENCH_ROAST;
    case 13:
    case "CUSTOM_ROAST":
      return Roast.CUSTOM_ROAST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Roast.UNRECOGNIZED;
  }
}

export function roastToJSON(object: Roast): string {
  switch (object) {
    case Roast.UNKNOWN_ROAST:
      return "UNKNOWN_ROAST";
    case Roast.CINNAMON_ROAST:
      return "CINNAMON_ROAST";
    case Roast.AMERICAN_ROAST:
      return "AMERICAN_ROAST";
    case Roast.NEW_ENGLAND_ROAST:
      return "NEW_ENGLAND_ROAST";
    case Roast.HALF_CITY_ROAST:
      return "HALF_CITY_ROAST";
    case Roast.MODERATE_LIGHT_ROAST:
      return "MODERATE_LIGHT_ROAST";
    case Roast.CITY_ROAST:
      return "CITY_ROAST";
    case Roast.CITY_PLUS_ROAST:
      return "CITY_PLUS_ROAST";
    case Roast.FULL_CITY_ROAST:
      return "FULL_CITY_ROAST";
    case Roast.FULL_CITY_PLUS_ROAST:
      return "FULL_CITY_PLUS_ROAST";
    case Roast.ITALIAN_ROAST:
      return "ITALIAN_ROAST";
    case Roast.VIEANNA_ROAST:
      return "VIEANNA_ROAST";
    case Roast.FRENCH_ROAST:
      return "FRENCH_ROAST";
    case Roast.CUSTOM_ROAST:
      return "CUSTOM_ROAST";
    case Roast.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BeanMix {
  UNKNOWN_BEAN_MIX = 0,
  SINGLE_ORIGIN = 1,
  BLEND = 2,
  UNRECOGNIZED = -1,
}

export function beanMixFromJSON(object: any): BeanMix {
  switch (object) {
    case 0:
    case "UNKNOWN_BEAN_MIX":
      return BeanMix.UNKNOWN_BEAN_MIX;
    case 1:
    case "SINGLE_ORIGIN":
      return BeanMix.SINGLE_ORIGIN;
    case 2:
    case "BLEND":
      return BeanMix.BLEND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BeanMix.UNRECOGNIZED;
  }
}

export function beanMixToJSON(object: BeanMix): string {
  switch (object) {
    case BeanMix.UNKNOWN_BEAN_MIX:
      return "UNKNOWN_BEAN_MIX";
    case BeanMix.SINGLE_ORIGIN:
      return "SINGLE_ORIGIN";
    case BeanMix.BLEND:
      return "BLEND";
    case BeanMix.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BeanRoastingType {
  UNKNOWN_BEAN_ROASTING_TYPE = 0,
  FILTER = 1,
  ESPRESSO = 2,
  OMNI = 3,
  UNRECOGNIZED = -1,
}

export function beanRoastingTypeFromJSON(object: any): BeanRoastingType {
  switch (object) {
    case 0:
    case "UNKNOWN_BEAN_ROASTING_TYPE":
      return BeanRoastingType.UNKNOWN_BEAN_ROASTING_TYPE;
    case 1:
    case "FILTER":
      return BeanRoastingType.FILTER;
    case 2:
    case "ESPRESSO":
      return BeanRoastingType.ESPRESSO;
    case 3:
    case "OMNI":
      return BeanRoastingType.OMNI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BeanRoastingType.UNRECOGNIZED;
  }
}

export function beanRoastingTypeToJSON(object: BeanRoastingType): string {
  switch (object) {
    case BeanRoastingType.UNKNOWN_BEAN_ROASTING_TYPE:
      return "UNKNOWN_BEAN_ROASTING_TYPE";
    case BeanRoastingType.FILTER:
      return "FILTER";
    case BeanRoastingType.ESPRESSO:
      return "ESPRESSO";
    case BeanRoastingType.OMNI:
      return "OMNI";
    case BeanRoastingType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Bean {
  name: string;
  buyDate: string;
  roastingDate: string;
  note: string;
  roaster: string;
  config: Config | undefined;
  roast: Roast;
  roastRange: number;
  beanMix: BeanMix;
  roastCustom: string;
  aromatics: string;
  weight: number;
  finished: boolean;
  coast: number;
  attachments: string[];
  cuppingPoints: string;
  decaffeinated: boolean;
  url: string;
  beanArticleNumber: string;
  rating: number;
  beanInformation: BeanInformation[];
  beanRoastingType: BeanRoastingType;
  beanRoastInformation: BeanRoastInformation | undefined;
  qrCode: string;
  favourite: boolean;
  shared: boolean;
}

export interface Config {
  uuid: string;
  unixTimestamp: number;
}

export interface BeanInformation {
  country: string;
  region: string;
  farm: string;
  farmer: string;
  elevation: string;
  harvestTime: string;
  variety: string;
  processing: string;
  certification: string;
  percentage: number;
  purchasingPrice: number;
  fobPrice: number;
}

export interface BeanRoastInformation {
  dropTemperature: number;
  roastLength: number;
  roasterMachine: string;
  greenBeanWeight: number;
  outsideTemperature: number;
  humidity: number;
  beanUuid: string;
  firstCrackMinute: number;
  firstCrackTemperature: number;
  secondCrackMinute: number;
  secondCrackTemperature: number;
}

function createBaseBean(): Bean {
  return {
    name: "",
    buyDate: "",
    roastingDate: "",
    note: "",
    roaster: "",
    config: undefined,
    roast: 0,
    roastRange: 0,
    beanMix: 0,
    roastCustom: "",
    aromatics: "",
    weight: 0,
    finished: false,
    coast: 0,
    attachments: [],
    cuppingPoints: "",
    decaffeinated: false,
    url: "",
    beanArticleNumber: "",
    rating: 0,
    beanInformation: [],
    beanRoastingType: 0,
    beanRoastInformation: undefined,
    qrCode: "",
    favourite: false,
    shared: false,
  };
}

export const Bean = {
  encode(message: Bean, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.buyDate !== "") {
      writer.uint32(18).string(message.buyDate);
    }
    if (message.roastingDate !== "") {
      writer.uint32(26).string(message.roastingDate);
    }
    if (message.note !== "") {
      writer.uint32(34).string(message.note);
    }
    if (message.roaster !== "") {
      writer.uint32(42).string(message.roaster);
    }
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(50).fork()).ldelim();
    }
    if (message.roast !== 0) {
      writer.uint32(56).int32(message.roast);
    }
    if (message.roastRange !== 0) {
      writer.uint32(64).uint64(message.roastRange);
    }
    if (message.beanMix !== 0) {
      writer.uint32(72).int32(message.beanMix);
    }
    if (message.roastCustom !== "") {
      writer.uint32(82).string(message.roastCustom);
    }
    if (message.aromatics !== "") {
      writer.uint32(90).string(message.aromatics);
    }
    if (message.weight !== 0) {
      writer.uint32(96).uint64(message.weight);
    }
    if (message.finished === true) {
      writer.uint32(104).bool(message.finished);
    }
    if (message.coast !== 0) {
      writer.uint32(112).uint64(message.coast);
    }
    for (const v of message.attachments) {
      writer.uint32(122).string(v!);
    }
    if (message.cuppingPoints !== "") {
      writer.uint32(130).string(message.cuppingPoints);
    }
    if (message.decaffeinated === true) {
      writer.uint32(136).bool(message.decaffeinated);
    }
    if (message.url !== "") {
      writer.uint32(146).string(message.url);
    }
    if (message.beanArticleNumber !== "") {
      writer.uint32(154).string(message.beanArticleNumber);
    }
    if (message.rating !== 0) {
      writer.uint32(160).uint32(message.rating);
    }
    for (const v of message.beanInformation) {
      BeanInformation.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.beanRoastingType !== 0) {
      writer.uint32(176).int32(message.beanRoastingType);
    }
    if (message.beanRoastInformation !== undefined) {
      BeanRoastInformation.encode(
        message.beanRoastInformation,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.qrCode !== "") {
      writer.uint32(194).string(message.qrCode);
    }
    if (message.favourite === true) {
      writer.uint32(200).bool(message.favourite);
    }
    if (message.shared === true) {
      writer.uint32(208).bool(message.shared);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bean {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBean();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.buyDate = reader.string();
          break;
        case 3:
          message.roastingDate = reader.string();
          break;
        case 4:
          message.note = reader.string();
          break;
        case 5:
          message.roaster = reader.string();
          break;
        case 6:
          message.config = Config.decode(reader, reader.uint32());
          break;
        case 7:
          message.roast = reader.int32() as any;
          break;
        case 8:
          message.roastRange = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.beanMix = reader.int32() as any;
          break;
        case 10:
          message.roastCustom = reader.string();
          break;
        case 11:
          message.aromatics = reader.string();
          break;
        case 12:
          message.weight = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.finished = reader.bool();
          break;
        case 14:
          message.coast = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.attachments.push(reader.string());
          break;
        case 16:
          message.cuppingPoints = reader.string();
          break;
        case 17:
          message.decaffeinated = reader.bool();
          break;
        case 18:
          message.url = reader.string();
          break;
        case 19:
          message.beanArticleNumber = reader.string();
          break;
        case 20:
          message.rating = reader.uint32();
          break;
        case 21:
          message.beanInformation.push(
            BeanInformation.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.beanRoastingType = reader.int32() as any;
          break;
        case 23:
          message.beanRoastInformation = BeanRoastInformation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.qrCode = reader.string();
          break;
        case 25:
          message.favourite = reader.bool();
          break;
        case 26:
          message.shared = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bean {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      buyDate: isSet(object.buyDate) ? String(object.buyDate) : "",
      roastingDate: isSet(object.roastingDate)
        ? String(object.roastingDate)
        : "",
      note: isSet(object.note) ? String(object.note) : "",
      roaster: isSet(object.roaster) ? String(object.roaster) : "",
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined,
      roast: isSet(object.roast) ? roastFromJSON(object.roast) : 0,
      roastRange: isSet(object.roastRange) ? Number(object.roastRange) : 0,
      beanMix: isSet(object.beanMix) ? beanMixFromJSON(object.beanMix) : 0,
      roastCustom: isSet(object.roastCustom) ? String(object.roastCustom) : "",
      aromatics: isSet(object.aromatics) ? String(object.aromatics) : "",
      weight: isSet(object.weight) ? Number(object.weight) : 0,
      finished: isSet(object.finished) ? Boolean(object.finished) : false,
      coast: isSet(object.coast) ? Number(object.coast) : 0,
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => String(e))
        : [],
      cuppingPoints: isSet(object.cuppingPoints)
        ? String(object.cuppingPoints)
        : "",
      decaffeinated: isSet(object.decaffeinated)
        ? Boolean(object.decaffeinated)
        : false,
      url: isSet(object.url) ? String(object.url) : "",
      beanArticleNumber: isSet(object.beanArticleNumber)
        ? String(object.beanArticleNumber)
        : "",
      rating: isSet(object.rating) ? Number(object.rating) : 0,
      beanInformation: Array.isArray(object?.beanInformation)
        ? object.beanInformation.map((e: any) => BeanInformation.fromJSON(e))
        : [],
      beanRoastingType: isSet(object.beanRoastingType)
        ? beanRoastingTypeFromJSON(object.beanRoastingType)
        : 0,
      beanRoastInformation: isSet(object.beanRoastInformation)
        ? BeanRoastInformation.fromJSON(object.beanRoastInformation)
        : undefined,
      qrCode: isSet(object.qrCode) ? String(object.qrCode) : "",
      favourite: isSet(object.favourite) ? Boolean(object.favourite) : false,
      shared: isSet(object.shared) ? Boolean(object.shared) : false,
    };
  },

  toJSON(message: Bean): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.buyDate !== undefined && (obj.buyDate = message.buyDate);
    message.roastingDate !== undefined &&
      (obj.roastingDate = message.roastingDate);
    message.note !== undefined && (obj.note = message.note);
    message.roaster !== undefined && (obj.roaster = message.roaster);
    message.config !== undefined &&
      (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    message.roast !== undefined && (obj.roast = roastToJSON(message.roast));
    message.roastRange !== undefined &&
      (obj.roastRange = Math.round(message.roastRange));
    message.beanMix !== undefined &&
      (obj.beanMix = beanMixToJSON(message.beanMix));
    message.roastCustom !== undefined &&
      (obj.roastCustom = message.roastCustom);
    message.aromatics !== undefined && (obj.aromatics = message.aromatics);
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    message.finished !== undefined && (obj.finished = message.finished);
    message.coast !== undefined && (obj.coast = Math.round(message.coast));
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) => e);
    } else {
      obj.attachments = [];
    }
    message.cuppingPoints !== undefined &&
      (obj.cuppingPoints = message.cuppingPoints);
    message.decaffeinated !== undefined &&
      (obj.decaffeinated = message.decaffeinated);
    message.url !== undefined && (obj.url = message.url);
    message.beanArticleNumber !== undefined &&
      (obj.beanArticleNumber = message.beanArticleNumber);
    message.rating !== undefined && (obj.rating = Math.round(message.rating));
    if (message.beanInformation) {
      obj.beanInformation = message.beanInformation.map((e) =>
        e ? BeanInformation.toJSON(e) : undefined
      );
    } else {
      obj.beanInformation = [];
    }
    message.beanRoastingType !== undefined &&
      (obj.beanRoastingType = beanRoastingTypeToJSON(message.beanRoastingType));
    message.beanRoastInformation !== undefined &&
      (obj.beanRoastInformation = message.beanRoastInformation
        ? BeanRoastInformation.toJSON(message.beanRoastInformation)
        : undefined);
    message.qrCode !== undefined && (obj.qrCode = message.qrCode);
    message.favourite !== undefined && (obj.favourite = message.favourite);
    message.shared !== undefined && (obj.shared = message.shared);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Bean>, I>>(object: I): Bean {
    const message = createBaseBean();
    message.name = object.name ?? "";
    message.buyDate = object.buyDate ?? "";
    message.roastingDate = object.roastingDate ?? "";
    message.note = object.note ?? "";
    message.roaster = object.roaster ?? "";
    message.config =
      object.config !== undefined && object.config !== null
        ? Config.fromPartial(object.config)
        : undefined;
    message.roast = object.roast ?? 0;
    message.roastRange = object.roastRange ?? 0;
    message.beanMix = object.beanMix ?? 0;
    message.roastCustom = object.roastCustom ?? "";
    message.aromatics = object.aromatics ?? "";
    message.weight = object.weight ?? 0;
    message.finished = object.finished ?? false;
    message.coast = object.coast ?? 0;
    message.attachments = object.attachments?.map((e) => e) || [];
    message.cuppingPoints = object.cuppingPoints ?? "";
    message.decaffeinated = object.decaffeinated ?? false;
    message.url = object.url ?? "";
    message.beanArticleNumber = object.beanArticleNumber ?? "";
    message.rating = object.rating ?? 0;
    message.beanInformation =
      object.beanInformation?.map((e) => BeanInformation.fromPartial(e)) || [];
    message.beanRoastingType = object.beanRoastingType ?? 0;
    message.beanRoastInformation =
      object.beanRoastInformation !== undefined &&
      object.beanRoastInformation !== null
        ? BeanRoastInformation.fromPartial(object.beanRoastInformation)
        : undefined;
    message.qrCode = object.qrCode ?? "";
    message.favourite = object.favourite ?? false;
    message.shared = object.shared ?? false;
    return message;
  },
};

function createBaseConfig(): Config {
  return { uuid: "", unixTimestamp: 0 };
}

export const Config = {
  encode(
    message: Config,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.unixTimestamp !== 0) {
      writer.uint32(16).uint64(message.unixTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.unixTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Config {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      unixTimestamp: isSet(object.unixTimestamp)
        ? Number(object.unixTimestamp)
        : 0,
    };
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.unixTimestamp !== undefined &&
      (obj.unixTimestamp = Math.round(message.unixTimestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Config>, I>>(object: I): Config {
    const message = createBaseConfig();
    message.uuid = object.uuid ?? "";
    message.unixTimestamp = object.unixTimestamp ?? 0;
    return message;
  },
};

function createBaseBeanInformation(): BeanInformation {
  return {
    country: "",
    region: "",
    farm: "",
    farmer: "",
    elevation: "",
    harvestTime: "",
    variety: "",
    processing: "",
    certification: "",
    percentage: 0,
    purchasingPrice: 0,
    fobPrice: 0,
  };
}

export const BeanInformation = {
  encode(
    message: BeanInformation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.country !== "") {
      writer.uint32(10).string(message.country);
    }
    if (message.region !== "") {
      writer.uint32(18).string(message.region);
    }
    if (message.farm !== "") {
      writer.uint32(26).string(message.farm);
    }
    if (message.farmer !== "") {
      writer.uint32(34).string(message.farmer);
    }
    if (message.elevation !== "") {
      writer.uint32(42).string(message.elevation);
    }
    if (message.harvestTime !== "") {
      writer.uint32(50).string(message.harvestTime);
    }
    if (message.variety !== "") {
      writer.uint32(58).string(message.variety);
    }
    if (message.processing !== "") {
      writer.uint32(66).string(message.processing);
    }
    if (message.certification !== "") {
      writer.uint32(74).string(message.certification);
    }
    if (message.percentage !== 0) {
      writer.uint32(80).uint32(message.percentage);
    }
    if (message.purchasingPrice !== 0) {
      writer.uint32(88).uint32(message.purchasingPrice);
    }
    if (message.fobPrice !== 0) {
      writer.uint32(96).uint32(message.fobPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BeanInformation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeanInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.country = reader.string();
          break;
        case 2:
          message.region = reader.string();
          break;
        case 3:
          message.farm = reader.string();
          break;
        case 4:
          message.farmer = reader.string();
          break;
        case 5:
          message.elevation = reader.string();
          break;
        case 6:
          message.harvestTime = reader.string();
          break;
        case 7:
          message.variety = reader.string();
          break;
        case 8:
          message.processing = reader.string();
          break;
        case 9:
          message.certification = reader.string();
          break;
        case 10:
          message.percentage = reader.uint32();
          break;
        case 11:
          message.purchasingPrice = reader.uint32();
          break;
        case 12:
          message.fobPrice = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BeanInformation {
    return {
      country: isSet(object.country) ? String(object.country) : "",
      region: isSet(object.region) ? String(object.region) : "",
      farm: isSet(object.farm) ? String(object.farm) : "",
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      elevation: isSet(object.elevation) ? String(object.elevation) : "",
      harvestTime: isSet(object.harvestTime) ? String(object.harvestTime) : "",
      variety: isSet(object.variety) ? String(object.variety) : "",
      processing: isSet(object.processing) ? String(object.processing) : "",
      certification: isSet(object.certification)
        ? String(object.certification)
        : "",
      percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
      purchasingPrice: isSet(object.purchasingPrice)
        ? Number(object.purchasingPrice)
        : 0,
      fobPrice: isSet(object.fobPrice) ? Number(object.fobPrice) : 0,
    };
  },

  toJSON(message: BeanInformation): unknown {
    const obj: any = {};
    message.country !== undefined && (obj.country = message.country);
    message.region !== undefined && (obj.region = message.region);
    message.farm !== undefined && (obj.farm = message.farm);
    message.farmer !== undefined && (obj.farmer = message.farmer);
    message.elevation !== undefined && (obj.elevation = message.elevation);
    message.harvestTime !== undefined &&
      (obj.harvestTime = message.harvestTime);
    message.variety !== undefined && (obj.variety = message.variety);
    message.processing !== undefined && (obj.processing = message.processing);
    message.certification !== undefined &&
      (obj.certification = message.certification);
    message.percentage !== undefined &&
      (obj.percentage = Math.round(message.percentage));
    message.purchasingPrice !== undefined &&
      (obj.purchasingPrice = Math.round(message.purchasingPrice));
    message.fobPrice !== undefined &&
      (obj.fobPrice = Math.round(message.fobPrice));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BeanInformation>, I>>(
    object: I
  ): BeanInformation {
    const message = createBaseBeanInformation();
    message.country = object.country ?? "";
    message.region = object.region ?? "";
    message.farm = object.farm ?? "";
    message.farmer = object.farmer ?? "";
    message.elevation = object.elevation ?? "";
    message.harvestTime = object.harvestTime ?? "";
    message.variety = object.variety ?? "";
    message.processing = object.processing ?? "";
    message.certification = object.certification ?? "";
    message.percentage = object.percentage ?? 0;
    message.purchasingPrice = object.purchasingPrice ?? 0;
    message.fobPrice = object.fobPrice ?? 0;
    return message;
  },
};

function createBaseBeanRoastInformation(): BeanRoastInformation {
  return {
    dropTemperature: 0,
    roastLength: 0,
    roasterMachine: "",
    greenBeanWeight: 0,
    outsideTemperature: 0,
    humidity: 0,
    beanUuid: "",
    firstCrackMinute: 0,
    firstCrackTemperature: 0,
    secondCrackMinute: 0,
    secondCrackTemperature: 0,
  };
}

export const BeanRoastInformation = {
  encode(
    message: BeanRoastInformation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dropTemperature !== 0) {
      writer.uint32(8).uint32(message.dropTemperature);
    }
    if (message.roastLength !== 0) {
      writer.uint32(16).uint64(message.roastLength);
    }
    if (message.roasterMachine !== "") {
      writer.uint32(26).string(message.roasterMachine);
    }
    if (message.greenBeanWeight !== 0) {
      writer.uint32(32).uint64(message.greenBeanWeight);
    }
    if (message.outsideTemperature !== 0) {
      writer.uint32(40).uint32(message.outsideTemperature);
    }
    if (message.humidity !== 0) {
      writer.uint32(48).uint32(message.humidity);
    }
    if (message.beanUuid !== "") {
      writer.uint32(58).string(message.beanUuid);
    }
    if (message.firstCrackMinute !== 0) {
      writer.uint32(64).uint32(message.firstCrackMinute);
    }
    if (message.firstCrackTemperature !== 0) {
      writer.uint32(72).uint32(message.firstCrackTemperature);
    }
    if (message.secondCrackMinute !== 0) {
      writer.uint32(80).uint32(message.secondCrackMinute);
    }
    if (message.secondCrackTemperature !== 0) {
      writer.uint32(88).uint32(message.secondCrackTemperature);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BeanRoastInformation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeanRoastInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dropTemperature = reader.uint32();
          break;
        case 2:
          message.roastLength = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.roasterMachine = reader.string();
          break;
        case 4:
          message.greenBeanWeight = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.outsideTemperature = reader.uint32();
          break;
        case 6:
          message.humidity = reader.uint32();
          break;
        case 7:
          message.beanUuid = reader.string();
          break;
        case 8:
          message.firstCrackMinute = reader.uint32();
          break;
        case 9:
          message.firstCrackTemperature = reader.uint32();
          break;
        case 10:
          message.secondCrackMinute = reader.uint32();
          break;
        case 11:
          message.secondCrackTemperature = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BeanRoastInformation {
    return {
      dropTemperature: isSet(object.dropTemperature)
        ? Number(object.dropTemperature)
        : 0,
      roastLength: isSet(object.roastLength) ? Number(object.roastLength) : 0,
      roasterMachine: isSet(object.roasterMachine)
        ? String(object.roasterMachine)
        : "",
      greenBeanWeight: isSet(object.greenBeanWeight)
        ? Number(object.greenBeanWeight)
        : 0,
      outsideTemperature: isSet(object.outsideTemperature)
        ? Number(object.outsideTemperature)
        : 0,
      humidity: isSet(object.humidity) ? Number(object.humidity) : 0,
      beanUuid: isSet(object.beanUuid) ? String(object.beanUuid) : "",
      firstCrackMinute: isSet(object.firstCrackMinute)
        ? Number(object.firstCrackMinute)
        : 0,
      firstCrackTemperature: isSet(object.firstCrackTemperature)
        ? Number(object.firstCrackTemperature)
        : 0,
      secondCrackMinute: isSet(object.secondCrackMinute)
        ? Number(object.secondCrackMinute)
        : 0,
      secondCrackTemperature: isSet(object.secondCrackTemperature)
        ? Number(object.secondCrackTemperature)
        : 0,
    };
  },

  toJSON(message: BeanRoastInformation): unknown {
    const obj: any = {};
    message.dropTemperature !== undefined &&
      (obj.dropTemperature = Math.round(message.dropTemperature));
    message.roastLength !== undefined &&
      (obj.roastLength = Math.round(message.roastLength));
    message.roasterMachine !== undefined &&
      (obj.roasterMachine = message.roasterMachine);
    message.greenBeanWeight !== undefined &&
      (obj.greenBeanWeight = Math.round(message.greenBeanWeight));
    message.outsideTemperature !== undefined &&
      (obj.outsideTemperature = Math.round(message.outsideTemperature));
    message.humidity !== undefined &&
      (obj.humidity = Math.round(message.humidity));
    message.beanUuid !== undefined && (obj.beanUuid = message.beanUuid);
    message.firstCrackMinute !== undefined &&
      (obj.firstCrackMinute = Math.round(message.firstCrackMinute));
    message.firstCrackTemperature !== undefined &&
      (obj.firstCrackTemperature = Math.round(message.firstCrackTemperature));
    message.secondCrackMinute !== undefined &&
      (obj.secondCrackMinute = Math.round(message.secondCrackMinute));
    message.secondCrackTemperature !== undefined &&
      (obj.secondCrackTemperature = Math.round(message.secondCrackTemperature));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BeanRoastInformation>, I>>(
    object: I
  ): BeanRoastInformation {
    const message = createBaseBeanRoastInformation();
    message.dropTemperature = object.dropTemperature ?? 0;
    message.roastLength = object.roastLength ?? 0;
    message.roasterMachine = object.roasterMachine ?? "";
    message.greenBeanWeight = object.greenBeanWeight ?? 0;
    message.outsideTemperature = object.outsideTemperature ?? 0;
    message.humidity = object.humidity ?? 0;
    message.beanUuid = object.beanUuid ?? "";
    message.firstCrackMinute = object.firstCrackMinute ?? 0;
    message.firstCrackTemperature = object.firstCrackTemperature ?? 0;
    message.secondCrackMinute = object.secondCrackMinute ?? 0;
    message.secondCrackTemperature = object.secondCrackTemperature ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
