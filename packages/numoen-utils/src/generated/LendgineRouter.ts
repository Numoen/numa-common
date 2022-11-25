/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace LendgineRouter {
  export type BurnParamsStruct = {
    base: PromiseOrValue<string>;
    speculative: PromiseOrValue<string>;
    baseScaleFactor: PromiseOrValue<BigNumberish>;
    speculativeScaleFactor: PromiseOrValue<BigNumberish>;
    upperBound: PromiseOrValue<BigNumberish>;
    shares: PromiseOrValue<BigNumberish>;
    liquidityMax: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
    deadline: PromiseOrValue<BigNumberish>;
  };

  export type BurnParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ] & {
    base: string;
    speculative: string;
    baseScaleFactor: BigNumber;
    speculativeScaleFactor: BigNumber;
    upperBound: BigNumber;
    shares: BigNumber;
    liquidityMax: BigNumber;
    recipient: string;
    deadline: BigNumber;
  };

  export type MintParamsStruct = {
    base: PromiseOrValue<string>;
    speculative: PromiseOrValue<string>;
    baseScaleFactor: PromiseOrValue<BigNumberish>;
    speculativeScaleFactor: PromiseOrValue<BigNumberish>;
    upperBound: PromiseOrValue<BigNumberish>;
    liquidity: PromiseOrValue<BigNumberish>;
    borrowAmount: PromiseOrValue<BigNumberish>;
    sharesMin: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
    deadline: PromiseOrValue<BigNumberish>;
  };

  export type MintParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ] & {
    base: string;
    speculative: string;
    baseScaleFactor: BigNumber;
    speculativeScaleFactor: BigNumber;
    upperBound: BigNumber;
    liquidity: BigNumber;
    borrowAmount: BigNumber;
    sharesMin: BigNumber;
    recipient: string;
    deadline: BigNumber;
  };
}

export interface LendgineRouterInterface extends utils.Interface {
  functions: {
    "MintCallback(uint256,bytes)": FunctionFragment;
    "burn((address,address,uint256,uint256,uint256,uint256,uint256,address,uint256))": FunctionFragment;
    "factory()": FunctionFragment;
    "mint((address,address,uint256,uint256,uint256,uint256,uint256,uint256,address,uint256))": FunctionFragment;
    "uniFactory()": FunctionFragment;
    "uniswapV2Call(address,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MintCallback"
      | "burn"
      | "factory"
      | "mint"
      | "uniFactory"
      | "uniswapV2Call"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MintCallback",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [LendgineRouter.BurnParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [LendgineRouter.MintParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "uniFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV2Call",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "MintCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uniFactory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV2Call",
    data: BytesLike
  ): Result;

  events: {
    "Burn(address,address,uint256,uint256)": EventFragment;
    "Mint(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
}

export interface BurnEventObject {
  payer: string;
  lendgine: string;
  shares: BigNumber;
  liquidity: BigNumber;
}
export type BurnEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface MintEventObject {
  recipient: string;
  lendgine: string;
  shares: BigNumber;
  liquidity: BigNumber;
}
export type MintEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  MintEventObject
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface LendgineRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LendgineRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MintCallback(
      amountS: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burn(
      params: LendgineRouter.BurnParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    mint(
      params: LendgineRouter.MintParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniFactory(overrides?: CallOverrides): Promise<[string]>;

    uniswapV2Call(
      arg0: PromiseOrValue<string>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MintCallback(
    amountS: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burn(
    params: LendgineRouter.BurnParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  mint(
    params: LendgineRouter.MintParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniFactory(overrides?: CallOverrides): Promise<string>;

  uniswapV2Call(
    arg0: PromiseOrValue<string>,
    amount0: PromiseOrValue<BigNumberish>,
    amount1: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MintCallback(
      amountS: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    burn(
      params: LendgineRouter.BurnParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    mint(
      params: LendgineRouter.MintParamsStruct,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { lendgine: string; shares: BigNumber }>;

    uniFactory(overrides?: CallOverrides): Promise<string>;

    uniswapV2Call(
      arg0: PromiseOrValue<string>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Burn(address,address,uint256,uint256)"(
      payer?: PromiseOrValue<string> | null,
      lendgine?: PromiseOrValue<string> | null,
      shares?: null,
      liquidity?: null
    ): BurnEventFilter;
    Burn(
      payer?: PromiseOrValue<string> | null,
      lendgine?: PromiseOrValue<string> | null,
      shares?: null,
      liquidity?: null
    ): BurnEventFilter;

    "Mint(address,address,uint256,uint256)"(
      recipient?: PromiseOrValue<string> | null,
      lendgine?: PromiseOrValue<string> | null,
      shares?: null,
      liquidity?: null
    ): MintEventFilter;
    Mint(
      recipient?: PromiseOrValue<string> | null,
      lendgine?: PromiseOrValue<string> | null,
      shares?: null,
      liquidity?: null
    ): MintEventFilter;
  };

  estimateGas: {
    MintCallback(
      amountS: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burn(
      params: LendgineRouter.BurnParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      params: LendgineRouter.MintParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniFactory(overrides?: CallOverrides): Promise<BigNumber>;

    uniswapV2Call(
      arg0: PromiseOrValue<string>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MintCallback(
      amountS: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burn(
      params: LendgineRouter.BurnParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      params: LendgineRouter.MintParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniswapV2Call(
      arg0: PromiseOrValue<string>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}