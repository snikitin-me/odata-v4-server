import "reflect-metadata";
export declare class Entity {
    constructor(entity: any);
}
export declare namespace Edm {
    function Binary(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Boolean(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Byte(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Date(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function DateTimeOffset(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Decimal(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Double(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Duration(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Guid(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Int16(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Int32(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Int64(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function SByte(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Single(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Stream(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function String(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function TimeOfDay(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Geography(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeographyPoint(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeographyLineString(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeographyPolygon(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeographyMultiPoint(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeographyMultiLineString(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeographyMultiPolygon(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeographyCollection(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Geometry(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeometryPoint(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeometryLineString(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeometryPolygon(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeometryMultiPoint(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeometryMultiLineString(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeometryMultiPolygon(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function GeometryCollection(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function Collection(elementType: Function): (target: any, targetKey: any, parameterIndex?: number) => void;
    function getTypeName(target: Function, propertyKey: string): string;
    function getType(target: Function, propertyKey: string): Function;
    function isCollection(target: Function, propertyKey: string): boolean;
    function getProperties(target: Function): string[];
    function getParameters(target: Function, targetKey: string): any[];
    function Key(): {
        (target: Function): void;
        (target: Object, targetKey: string | symbol): void;
    };
    function isKey(target: Function, propertyKey: string): boolean;
    function Computed(): {
        (target: Function): void;
        (target: Object, targetKey: string | symbol): void;
    };
    function isComputed(target: Function, propertyKey: string): boolean;
    function Nullable(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function isNullable(target: Function, propertyKey: string): boolean;
    function Required(): (target: any, targetKey: any, parameterIndex?: number) => void;
    function isRequired(target: Function, propertyKey: string): boolean;
    function ActionImport(returnType?: Function): (target: any, targetKey: any) => void;
    function Action(returnType?: Function): (target: any, targetKey: any) => void;
    function FunctionImport(returnType: Function): (target: any, targetKey: any) => void;
    function Function(returnType: Function): (target: any, targetKey: any) => void;
    function getOperations(target: Function): string[];
    function getReturnType(target: Function, propertyKey: string): string;
    function isActionImport(target: Function, propertyKey: string): boolean;
    function isFunctionImport(target: Function, propertyKey: string): boolean;
    function isAction(target: Function, propertyKey: string): boolean;
    function isFunction(target: Function, propertyKey: string): boolean;
    function ComplexType(type: Function): (target: any, targetKey: any) => void;
    function isComplexType(target: Function, propertyKey: string): boolean;
    function Convert(converter: Function): {
        (target: Function): void;
        (target: Object, targetKey: string | symbol): void;
    };
    function getConverter(target: Function, propertyKey: string): Function;
    function Annotate(...annotation: any[]): (target: any, targetKey?: string) => void;
    function getAnnotations(target: Function, targetKey?: string): any[];
}