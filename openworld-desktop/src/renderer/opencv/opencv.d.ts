/* eslint-disable */
declare namespace opencv {
  export function read(...args: any): any;
  export function readAsync(...args: any): any;
  export function arguments(...args: any): any;
  export function print(...args: any): any;
  export function printErr(...args: any): any;
  export function setWindowTitle(...args: any): any;
  export function load(...args: any): any;
  export function thisProgram(...args: any): any;
  export function quit(...args: any): any;
  export function preRun(...args: any): any;
  export function postRun(...args: any): any;
  export class Runtime {
    setTempRet0: any;

    getTempRet0: any;

    stackSave: any;

    stackRestore: any;

    getNativeTypeSize: any;

    getNativeFieldSize: any;

    STACK_ALIGN: any;

    prepVararg: any;

    getAlignSize: any;

    dynCall: any;

    functionPointers: any;

    addFunction: any;

    removeFunction: any;

    warnOnce: any;

    funcWrappers: any;

    getFuncWrapper: any;

    getCompilerSetting: any;

    stackAlloc: any;

    staticAlloc: any;

    dynamicAlloc: any;

    alignMemory: any;

    makeBigInt: any;

    GLOBAL_BASE: any;

    QUANTUM_SIZE: any;

    __dummy__: any;

    establishStackSpace: any;
  }
  export function ccall(...args: any): any;
  export function cwrap(...args: any): any;
  export function setValue(...args: any): any;
  export function getValue(...args: any): any;
  export function ALLOC_NORMAL(...args: any): any;
  export function ALLOC_STACK(...args: any): any;
  export function ALLOC_STATIC(...args: any): any;
  export function ALLOC_DYNAMIC(...args: any): any;
  export function ALLOC_NONE(...args: any): any;
  export function allocate(...args: any): any;
  export function getMemory(...args: any): any;
  export function Pointer_stringify(...args: any): any;
  export function AsciiToString(...args: any): any;
  export function stringToAscii(...args: any): any;
  export function UTF8ArrayToString(...args: any): any;
  export function UTF8ToString(...args: any): any;
  export function stringToUTF8Array(...args: any): any;
  export function stringToUTF8(...args: any): any;
  export function lengthBytesUTF8(...args: any): any;
  export function stackTrace(...args: any): any;
  export function reallocBuffer(...args: any): any;
  export function HEAP8(...args: any): any;
  export function HEAP16(...args: any): any;
  export function HEAP32(...args: any): any;
  export function HEAPU8(...args: any): any;
  export function HEAPU16(...args: any): any;
  export function HEAPU32(...args: any): any;
  export function HEAPF32(...args: any): any;
  export function HEAPF64(...args: any): any;
  export function HEAP(...args: any): any;
  export function buffer(...args: any): any;
  export function addOnPreRun(...args: any): any;
  export function addOnInit(...args: any): any;
  export function addOnPreMain(...args: any): any;
  export function addOnExit(...args: any): any;
  export function addOnPostRun(...args: any): any;
  export function intArrayFromString(...args: any): any;
  export function intArrayToString(...args: any): any;
  export function writeStringToMemory(...args: any): any;
  export function writeArrayToMemory(...args: any): any;
  export function writeAsciiToMemory(...args: any): any;
  export function addRunDependency(...args: any): any;
  export function removeRunDependency(...args: any): any;
  export function preloadedImages(...args: any): any;
  export function preloadedAudios(...args: any): any;
  export function count_emval_handles(...args: any): any;
  export function get_first_emval(...args: any): any;
  export class BindingError {
    toString: any;
  }
  export class InternalError {
    toString: any;
  }
  export function FS_createFolder(...args: any): any;
  export function FS_createPath(...args: any): any;
  export function FS_createDataFile(...args: any): any;
  export function FS_createPreloadedFile(...args: any): any;
  export function FS_createLazyFile(...args: any): any;
  export function FS_createLink(...args: any): any;
  export function FS_createDevice(...args: any): any;
  export function FS_unlink(...args: any): any;
  export function requestFullScreen(...args: any): any;
  export function requestFullscreen(...args: any): any;
  export function requestAnimationFrame(...args: any): any;
  export function setCanvasSize(...args: any): any;
  export function pauseMainLoop(...args: any): any;
  export function resumeMainLoop(...args: any): any;
  export function getUserMedia(...args: any): any;
  export function createContext(...args: any): any;
  export function getInheritedInstanceCount(...args: any): any;
  export function getLiveInheritedInstances(...args: any): any;
  export function flushPendingDeletes(...args: any): any;
  export function setDelayFunction(...args: any): any;
  export class UnboundTypeError {
    toString: any;
  }
  export function asmGlobalArg(...args: any): any;
  export namespace asmLibraryArg {
    export function abort(...args: any): any;
    export function assert(...args: any): any;
    export function enlargeMemory(...args: any): any;
    export function getTotalMemory(...args: any): any;
    export function abortOnCannotGrowMemory(...args: any): any;
    export function invoke_iiiiiid(...args: any): any;
    export function invoke_viiiiddd(...args: any): any;
    export function invoke_viiiidiii(...args: any): any;
    export function invoke_viiiiiddi(...args: any): any;
    export function invoke_viiidiii(...args: any): any;
    export function invoke_viiiidiid(...args: any): any;
    export function invoke_iiiiiii(...args: any): any;
    export function invoke_viiiidddiiii(...args: any): any;
    export function invoke_viiiiddi(...args: any): any;
    export function invoke_viiiddddi(...args: any): any;
    export function invoke_viidiii(...args: any): any;
    export function invoke_viiiiiiiiiii(...args: any): any;
    export function invoke_iidd(...args: any): any;
    export function invoke_viiiiiiiiiid(...args: any): any;
    export function invoke_viiidddd(...args: any): any;
    export function invoke_iidi(...args: any): any;
    export function invoke_viiddidd(...args: any): any;
    export function invoke_vidi(...args: any): any;
    export function invoke_viiddii(...args: any): any;
    export function invoke_viiddid(...args: any): any;
    export function invoke_iiiidi(...args: any): any;
    export function invoke_vidd(...args: any): any;
    export function invoke_viiiiidi(...args: any): any;
    export function invoke_viiddidddd(...args: any): any;
    export function invoke_viiiiddiiii(...args: any): any;
    export function invoke_viiiiiiidd(...args: any): any;
    export function invoke_viiiiddiiid(...args: any): any;
    export function invoke_viiiiiiidi(...args: any): any;
    export function invoke_viiiddii(...args: any): any;
    export function invoke_iiiidd(...args: any): any;
    export function invoke_viiiiidd(...args: any): any;
    export function invoke_viiiiddiddi(...args: any): any;
    export function invoke_di(...args: any): any;
    export function invoke_viiiiiidiiii(...args: any): any;
    export function invoke_iiiiddi(...args: any): any;
    export function invoke_viiiidiiddi(...args: any): any;
    export function invoke_viiiiddiiiid(...args: any): any;
    export function invoke_viiiiddiii(...args: any): any;
    export function invoke_vdii(...args: any): any;
    export function invoke_diiiiiii(...args: any): any;
    export function invoke_iiiiiddiddi(...args: any): any;
    export function invoke_dii(...args: any): any;
    export function invoke_viiiddiiii(...args: any): any;
    export function invoke_viiiddiiid(...args: any): any;
    export function invoke_viiiidiidd(...args: any): any;
    export function invoke_iiiiiddid(...args: any): any;
    export function invoke_iiiii(...args: any): any;
    export function invoke_viiiiidiiiii(...args: any): any;
    export function invoke_viiidddi(...args: any): any;
    export function invoke_viiiiidiidd(...args: any): any;
    export function invoke_iiiid(...args: any): any;
    export function invoke_iiiddiiid(...args: any): any;
    export function invoke_iiiiiiii(...args: any): any;
    export function invoke_iiiddi(...args: any): any;
    export function invoke_viiddiii(...args: any): any;
    export function invoke_viiddiid(...args: any): any;
    export function invoke_iiiiiiiididiii(...args: any): any;
    export function invoke_iidddd(...args: any): any;
    export function invoke_viidiiid(...args: any): any;
    export function invoke_viiiidiiii(...args: any): any;
    export function invoke_viidiiii(...args: any): any;
    export function invoke_viiiiiiiiiiddi(...args: any): any;
    export function invoke_diiiddi(...args: any): any;
    export function invoke_viiididii(...args: any): any;
    export function invoke_diiiiiiii(...args: any): any;
    export function invoke_viiidiiid(...args: any): any;
    export function invoke_viiiddddii(...args: any): any;
    export function invoke_iiidiiiiiii(...args: any): any;
    export function invoke_viiiiid(...args: any): any;
    export function invoke_viiiiddddii(...args: any): any;
    export function invoke_viiiiii(...args: any): any;
    export function invoke_viiidiiii(...args: any): any;
    export function invoke_viiiiiidi(...args: any): any;
    export function invoke_viiiiiidiii(...args: any): any;
    export function invoke_viiiidddii(...args: any): any;
    export function invoke_viiidd(...args: any): any;
    export function invoke_viiidi(...args: any): any;
    export function invoke_iiidiiii(...args: any): any;
    export function invoke_vidddd(...args: any): any;
    export function invoke_viiddiddd(...args: any): any;
    export function invoke_iiddd(...args: any): any;
    export function invoke_viiiiiiiiii(...args: any): any;
    export function invoke_iiiiiddidd(...args: any): any;
    export function invoke_diiddi(...args: any): any;
    export function invoke_iiiiiddi(...args: any): any;
    export function invoke_diii(...args: any): any;
    export function invoke_viiiddd(...args: any): any;
    export function invoke_viidiiiii(...args: any): any;
    export function invoke_iiiddii(...args: any): any;
    export function invoke_viiiddidd(...args: any): any;
    export function invoke_viiidiiiidi(...args: any): any;
    export function invoke_viiiddiiiid(...args: any): any;
    export function invoke_viiiddi(...args: any): any;
    export function invoke_iiiiii(...args: any): any;
    export function invoke_viiid(...args: any): any;
    export function invoke_iiiiidii(...args: any): any;
    export function invoke_viidii(...args: any): any;
    export function invoke_iiiiid(...args: any): any;
    export function invoke_viiiidddi(...args: any): any;
    export function invoke_viiii(...args: any): any;
    export function invoke_viiddiiid(...args: any): any;
    export function invoke_viiiii(...args: any): any;
    export function invoke_iiiiiiddi(...args: any): any;
    export function invoke_viidiiiiiii(...args: any): any;
    export function invoke_vid(...args: any): any;
    export function invoke_iiidi(...args: any): any;
    export function invoke_iiidd(...args: any): any;
    export function invoke_vii(...args: any): any;
    export function invoke_viiiid(...args: any): any;
    export function invoke_viiiiddddi(...args: any): any;
    export function invoke_iiiiidiii(...args: any): any;
    export function invoke_viidd(...args: any): any;
    export function invoke_viidi(...args: any): any;
    export function invoke_viddd(...args: any): any;
    export function invoke_viiidiiddi(...args: any): any;
    export function invoke_iiiidii(...args: any): any;
    export function invoke_diiid(...args: any): any;
    export function invoke_viiidddii(...args: any): any;
    export function invoke_viiiiiiii(...args: any): any;
    export function invoke_viiidddiiii(...args: any): any;
    export function invoke_viiiiiiid(...args: any): any;
    export function invoke_viiiiiiddi(...args: any): any;
    export function invoke_diiii(...args: any): any;
    export function invoke_viiiiidiiddi(...args: any): any;
    export function invoke_viiiddidddd(...args: any): any;
    export function invoke_viiiiiiiiiiid(...args: any): any;
    export function invoke_viiiiidii(...args: any): any;
    export function invoke_viiiddiddd(...args: any): any;
    export function invoke_iid(...args: any): any;
    export function invoke_viiiddid(...args: any): any;
    export function invoke_viiiiiii(...args: any): any;
    export function invoke_viididdi(...args: any): any;
    export function invoke_viiiiiid(...args: any): any;
    export function invoke_viiiiiiiii(...args: any): any;
    export function invoke_iii(...args: any): any;
    export function invoke_viiddi(...args: any): any;
    export function invoke_viiididi(...args: any): any;
    export function invoke_vdiii(...args: any): any;
    export function invoke_viiiiiidii(...args: any): any;
    export function invoke_viiiiddidd(...args: any): any;
    export function invoke_viiiidddiii(...args: any): any;
    export function invoke_viii(...args: any): any;
    export function invoke_v(...args: any): any;
    export function invoke_viid(...args: any): any;
    export function invoke_viiidddiii(...args: any): any;
    export function invoke_iiiddiid(...args: any): any;
    export function invoke_viiiiidiiii(...args: any): any;
    export function invoke_vi(...args: any): any;
    export function invoke_viiiidiiiidi(...args: any): any;
    export function invoke_ii(...args: any): any;
    export function invoke_viiiiiiiddi(...args: any): any;
    export function invoke_vididdi(...args: any): any;
    export function invoke_viiiiiidd(...args: any): any;
    export function invoke_vidii(...args: any): any;
    export function invoke_iiiidiii(...args: any): any;
    export function invoke_viiiidi(...args: any): any;
    export function invoke_viiiddiii(...args: any): any;
    export function invoke_viidiiiiii(...args: any): any;
    export function invoke_iiii(...args: any): any;
    export function invoke_viididii(...args: any): any;
    export function invoke_viiiidddd(...args: any): any;
    export function invoke_viiiiddii(...args: any): any;
    export function invoke_viiiiddid(...args: any): any;
    export function invoke_iiid(...args: any): any;
    export function invoke_viiiiiiiiidd(...args: any): any;
    export function invoke_viiiidii(...args: any): any;
    export function invoke_diiiii(...args: any): any;
    export function invoke_diiiid(...args: any): any;
    export function invoke_iiiiiiiiiiiii(...args: any): any;
    export function invoke_iiiiidd(...args: any): any;
    export function invoke_viiidii(...args: any): any;
    export function invoke_iiiiidi(...args: any): any;
    export function invoke_iiidiii(...args: any): any;
    export function invoke_iiidiiiiii(...args: any): any;
    export function invoke_i(...args: any): any;
    export function invoke_iiidii(...args: any): any;
    export function invoke_diiiiii(...args: any): any;
    export function invoke_iiidiiiii(...args: any): any;
    export function invoke_vididdii(...args: any): any;
    export function invoke_viiiiiidiiiii(...args: any): any;
    export function invoke_iiiiiidd(...args: any): any;
    export function invoke_viiiiidiii(...args: any): any;
    export function invoke_viididi(...args: any): any;
    export function invoke_iiiiiiiii(...args: any): any;
    export function invoke_viididdii(...args: any): any;
    export function invoke_viiiiidiid(...args: any): any;
    export function invoke_viiiidd(...args: any): any;
    export function invoke_vidiii(...args: any): any;
    export function ___syscall221(...args: any): any;
    export function floatReadValueFromPointer(...args: any): any;
    export function simpleReadValueFromPointer(...args: any): any;
    export function __emval_call_void_method(...args: any): any;
    export function throwInternalError(...args: any): any;
    export function get_first_emval(...args: any): any;
    export function whenDependentTypesAreResolved(...args: any): any;
    export function constNoSmartPtrRawPointerToWireType(...args: any): any;
    export function getLiveInheritedInstances(...args: any): any;
    export function ___assert_fail(...args: any): any;
    export function __ZSt18uncaught_exceptionv(...args: any): any;
    export class ClassHandle {
      isAliasOf: any;

      clone: any;

      delete: any;

      isDeleted: any;

      deleteLater: any;
    }
    export function getShiftFromSize(...args: any): any;
    export function __emval_get_property(...args: any): any;
    export function _llvm_exp2_f64(...args: any): any;
    export function __addDays(...args: any): any;
    export function _emscripten_set_main_loop_timing(...args: any): any;
    export function _pthread_key_delete(...args: any): any;
    export function ___cxa_begin_catch(...args: any): any;
    export function _emscripten_memcpy_big(...args: any): any;
    export function runDestructor(...args: any): any;
    export function throwInstanceAlreadyDeleted(...args: any): any;
    export function __embind_register_std_string(...args: any): any;
    export function init_RegisteredPointer(...args: any): any;
    export function getStringOrSymbol(...args: any): any;
    export function flushPendingDeletes(...args: any): any;
    export function _pthread_mutexattr_settype(...args: any): any;
    export function makeClassHandle(...args: any): any;
    export function __isLeapYear(...args: any): any;
    export function __embind_register_class_constructor(...args: any): any;
    export function ___cxa_atexit(...args: any): any;
    export function __embind_finalize_value_array(...args: any): any;
    export function __emval_allocateDestructors(...args: any): any;
    export function init_ClassHandle(...args: any): any;
    export function __embind_register_constant(...args: any): any;
    export function ___syscall140(...args: any): any;
    export function ClassHandle_clone(...args: any): any;
    export function ___syscall145(...args: any): any;
    export function ___syscall146(...args: any): any;
    export function throwBindingError(...args: any): any;
    export function __emval_incref(...args: any): any;
    export function ___cxa_find_matching_catch(...args: any): any;
    export function __embind_register_value_object_field(...args: any): any;
    export function embind_init_charCodes(...args: any): any;
    export function __emval_as(...args: any): any;
    export function ___setErrNo(...args: any): any;
    export function readLatin1String(...args: any): any;
    export function _llvm_pow_f32(...args: any): any;
    export function __embind_register_bool(...args: any): any;
    export function ___resumeException(...args: any): any;
    export function createNamedFunction(...args: any): any;
    export function __embind_register_class_property(...args: any): any;
    export function __embind_register_emval(...args: any): any;
    export function ___buildEnvironment(...args: any): any;
    export function __embind_finalize_value_object(...args: any): any;
    export function __emval_decref(...args: any): any;
    export function _pthread_once(...args: any): any;
    export function __embind_register_class(...args: any): any;
    export function ___syscall91(...args: any): any;
    export function __emval_addMethodCaller(...args: any): any;
    export function heap32VectorToArray(...args: any): any;
    export function __emval_lookupTypes(...args: any): any;
    export function _emscripten_get_now(...args: any): any;
    export function __emval_run_destructors(...args: any): any;
    export function ClassHandle_delete(...args: any): any;
    export function ___syscall3(...args: any): any;
    export function RegisteredPointer_destructor(...args: any): any;
    export function _llvm_exp2_f32(...args: any): any;
    export function ___syscall6(...args: any): any;
    export function ___syscall5(...args: any): any;
    export function ensureOverloadTable(...args: any): any;
    export function _gettimeofday(...args: any): any;
    export function new_(...args: any): any;
    export function downcastPointer(...args: any): any;
    export function replacePublicSymbol(...args: any): any;
    export function init_embind(...args: any): any;
    export function _llvm_pow_f64(...args: any): any;
    export function ClassHandle_deleteLater(...args: any): any;
    export function ___syscall54(...args: any): any;
    export function _sched_yield(...args: any): any;
    export function RegisteredPointer_deleteObject(...args: any): any;
    export function ClassHandle_isDeleted(...args: any): any;
    export function __embind_register_integer(...args: any): any;
    export function ___cxa_allocate_exception(...args: any): any;
    export function __emval_take_value(...args: any): any;
    export function __embind_register_value_object(...args: any): any;
    export function getTypeName(...args: any): any;
    export function _strftime(...args: any): any;
    export function __embind_register_class_function(...args: any): any;
    export class RegisteredPointer {
      getPointee: any;

      destructor: any;

      argPackAdvance: any;

      readValueFromPointer: any;

      deleteObject: any;

      fromWireType: any;
    }
    export function craftInvokerFunction(...args: any): any;
    export function _getenv(...args: any): any;
    export function runDestructors(...args: any): any;
    export function requireRegisteredType(...args: any): any;
    export function makeLegalFunctionName(...args: any): any;
    export function _pthread_key_create(...args: any): any;
    export function upcastPointer(...args: any): any;
    export function init_emval(...args: any): any;
    export function shallowCopyInternalPointer(...args: any): any;
    export function nonConstNoSmartPtrRawPointerToWireType(...args: any): any;
    export function __embind_register_value_array(...args: any): any;
    export function _abort(...args: any): any;
    export function requireHandle(...args: any): any;
    export function _embind_repr(...args: any): any;
    export function validateThis(...args: any): any;
    export function exposePublicSymbol(...args: any): any;
    export function RegisteredPointer_fromWireType(...args: any): any;
    export function ___cxa_pure_virtual(...args: any): any;
    export function __emval_get_method_caller(...args: any): any;
    export function _pthread_getspecific(...args: any): any;
    export function _pthread_cond_wait(...args: any): any;
    export function ___lock(...args: any): any;
    export function RegisteredClass(...args: any): any;
    export function __embind_register_memory_view(...args: any): any;
    export function getInheritedInstance(...args: any): any;
    export function setDelayFunction(...args: any): any;
    export function ___gxx_personality_v0(...args: any): any;
    export function extendError(...args: any): any;
    export function ___syscall4(...args: any): any;
    export function __embind_register_value_array_element(...args: any): any;
    export function __emval_new_array(...args: any): any;
    export function __embind_register_void(...args: any): any;
    export function __embind_register_smart_ptr(...args: any): any;
    export function __embind_register_function(...args: any): any;
    export function _pthread_mutexattr_destroy(...args: any): any;
    export function _strftime_l(...args: any): any;
    export function RegisteredPointer_getPointee(...args: any): any;
    export function __emval_register(...args: any): any;
    export function __embind_register_std_wstring(...args: any): any;
    export function ClassHandle_isAliasOf(...args: any): any;
    export function throwUnboundTypeError(...args: any): any;
    export function __arraySum(...args: any): any;
    export function __embind_register_class_class_function(...args: any): any;
    export function _pthread_mutex_destroy(...args: any): any;
    export function getBasestPointer(...args: any): any;
    export function getInheritedInstanceCount(...args: any): any;
    export function __embind_register_float(...args: any): any;
    export function integerReadValueFromPointer(...args: any): any;
    export function ___unlock(...args: any): any;
    export function _emscripten_set_main_loop(...args: any): any;
    export function _pthread_mutexattr_init(...args: any): any;
    export function _pthread_setspecific(...args: any): any;
    export function genericPointerToWireType(...args: any): any;
    export function registerType(...args: any): any;
    export function ___cxa_throw(...args: any): any;
    export function __emval_new_cstring(...args: any): any;
    export function count_emval_handles(...args: any): any;
    export function requireFunction(...args: any): any;
    export function _atexit(...args: any): any;
    export function _pthread_mutex_init(...args: any): any;
    export function ___map_file(...args: any): any;
    export function DYNAMICTOP_PTR(...args: any): any;
    export function tempDoublePtr(...args: any): any;
    export function ABORT(...args: any): any;
    export function STACKTOP(...args: any): any;
    export function STACK_MAX(...args: any): any;
    export function cttz_i8(...args: any): any;
    export function ___dso_handle(...args: any): any;
  }
  export function __GLOBAL__sub_I_attr_value_pb_cc(...args: any): any;
  export function __GLOBAL__sub_I_op_def_pb_cc(...args: any): any;
  export function ___cxx_global_var_init_28(...args: any): any;
  export function ___cxx_global_var_init(...args: any): any;
  export function __GLOBAL__sub_I_init_cpp(...args: any): any;
  export function stackSave(...args: any): any;
  export function ___cxx_global_var_init_29(...args: any): any;
  export function ___udivdi3(...args: any): any;
  export function getTempRet0(...args: any): any;
  export function __GLOBAL__sub_I_system_cpp(...args: any): any;
  export function __GLOBAL__sub_I_graph_pb_cc(...args: any): any;
  export function _bitshift64Lshr(...args: any): any;
  export function __GLOBAL__sub_I_tensor_pb_cc(...args: any): any;
  export function _bitshift64Shl(...args: any): any;
  export function _sbrk(...args: any): any;
  export function _fflush(...args: any): any;
  export function __GLOBAL__sub_I_types_pb_cc(...args: any): any;
  export function ___cxa_is_pointer_type(...args: any): any;
  export function _llvm_ctlz_i64(...args: any): any;
  export function _bitshift64Ashr(...args: any): any;
  export function _memset(...args: any): any;
  export function __GLOBAL__sub_I_status_cc(...args: any): any;
  export function ___cxa_demangle(...args: any): any;
  export function ___cxx_global_var_init_34(...args: any): any;
  export function __GLOBAL__sub_I_imgwarp_cpp(...args: any): any;
  export function _memcpy(...args: any): any;
  export function __GLOBAL__sub_I_darknet_io_cpp(...args: any): any;
  export function _llvm_bswap_i32(...args: any): any;
  export function ___muldi3(...args: any): any;
  export function __GLOBAL__sub_I_prior_box_layer_cpp(...args: any): any;
  export function __GLOBAL__sub_I_versions_pb_cc(...args: any): any;
  export function ___uremdi3(...args: any): any;
  export function __GLOBAL__sub_I_color_lab_cpp(...args: any): any;
  export function ___divdi3(...args: any): any;
  export function stackAlloc(...args: any): any;
  export function _i64Subtract(...args: any): any;
  export function __GLOBAL__sub_I_bind_cpp(...args: any): any;
  export function ___cxx_global_var_init_38(...args: any): any;
  export function setTempRet0(...args: any): any;
  export function _i64Add(...args: any): any;
  export function ___cxx_global_var_init_35(...args: any): any;
  export function ___cxx_global_var_init_36(...args: any): any;
  export function ___cxx_global_var_init_37(...args: any): any;
  export function ___cxx_global_var_init_30(...args: any): any;
  export function _pthread_mutex_unlock(...args: any): any;
  export function ___cxx_global_var_init_32(...args: any): any;
  export function __GLOBAL__I_000101(...args: any): any;
  export function __GLOBAL__sub_I_umatrix_cpp(...args: any): any;
  export function _emscripten_get_global_libc(...args: any): any;
  export function ___getTypeName(...args: any): any;
  export function __GLOBAL__sub_I_detection_output_layer_cpp(...args: any): any;
  export function __GLOBAL__sub_I_iostream_cpp(...args: any): any;
  export function __GLOBAL__sub_I_dnn_cpp(...args: any): any;
  export function _pthread_cond_broadcast(...args: any): any;
  export function __GLOBAL__sub_I_function_pb_cc(...args: any): any;
  export function __GLOBAL__sub_I_descriptor_pb_cc(...args: any): any;
  export function ___errno_location(...args: any): any;
  export function __GLOBAL__sub_I_message_cc(...args: any): any;
  export function __GLOBAL__sub_I_tensor_shape_pb_cc(...args: any): any;
  export function ___cxa_can_catch(...args: any): any;
  export function _free(...args: any): any;
  export function runPostSets(...args: any): any;
  export function setThrew(...args: any): any;
  export function establishStackSpace(...args: any): any;
  export function _memmove(...args: any): any;
  export function __GLOBAL__sub_I_bindings_cpp(...args: any): any;
  export function stackRestore(...args: any): any;
  export function _malloc(...args: any): any;
  export function _pthread_mutex_lock(...args: any): any;
  export function __GLOBAL__sub_I_kmeans_cpp(...args: any): any;
  export function _emscripten_replace_memory(...args: any): any;
  export function __GLOBAL__sub_I_opencv_onnx_pb_cc(...args: any): any;
  export function ___remdi3(...args: any): any;
  export function __GLOBAL__sub_I_opencv_caffe_pb_cc(...args: any): any;
  export function ___cxx_global_var_init_31(...args: any): any;
  export function ___cxx_global_var_init_33(...args: any): any;
  export function dynCall_iiiiiid(...args: any): any;
  export function dynCall_viiiiddd(...args: any): any;
  export function dynCall_viiiidiii(...args: any): any;
  export function dynCall_viiiiiddi(...args: any): any;
  export function dynCall_viiidiii(...args: any): any;
  export function dynCall_viiiidiid(...args: any): any;
  export function dynCall_iiiiiii(...args: any): any;
  export function dynCall_viiiidddiiii(...args: any): any;
  export function dynCall_viiiiddi(...args: any): any;
  export function dynCall_viiiddddi(...args: any): any;
  export function dynCall_viidiii(...args: any): any;
  export function dynCall_viiiiiiiiiii(...args: any): any;
  export function dynCall_iidd(...args: any): any;
  export function dynCall_viiiiiiiiiid(...args: any): any;
  export function dynCall_viiidddd(...args: any): any;
  export function dynCall_iidi(...args: any): any;
  export function dynCall_viiddidd(...args: any): any;
  export function dynCall_vidi(...args: any): any;
  export function dynCall_viiddii(...args: any): any;
  export function dynCall_viiddid(...args: any): any;
  export function dynCall_iiiidi(...args: any): any;
  export function dynCall_vidd(...args: any): any;
  export function dynCall_viiiiidi(...args: any): any;
  export function dynCall_viiddidddd(...args: any): any;
  export function dynCall_viiiiddiiii(...args: any): any;
  export function dynCall_viiiiiiidd(...args: any): any;
  export function dynCall_viiiiddiiid(...args: any): any;
  export function dynCall_viiiiiiidi(...args: any): any;
  export function dynCall_viiiddii(...args: any): any;
  export function dynCall_iiiidd(...args: any): any;
  export function dynCall_viiiiidd(...args: any): any;
  export function dynCall_viiiiddiddi(...args: any): any;
  export function dynCall_di(...args: any): any;
  export function dynCall_viiiiiidiiii(...args: any): any;
  export function dynCall_iiiiddi(...args: any): any;
  export function dynCall_viiiidiiddi(...args: any): any;
  export function dynCall_viiiiddiiiid(...args: any): any;
  export function dynCall_viiiiddiii(...args: any): any;
  export function dynCall_vdii(...args: any): any;
  export function dynCall_diiiiiii(...args: any): any;
  export function dynCall_iiiiiddiddi(...args: any): any;
  export function dynCall_dii(...args: any): any;
  export function dynCall_viiiddiiii(...args: any): any;
  export function dynCall_viiiddiiid(...args: any): any;
  export function dynCall_viiiidiidd(...args: any): any;
  export function dynCall_iiiiiddid(...args: any): any;
  export function dynCall_iiiii(...args: any): any;
  export function dynCall_viiiiidiiiii(...args: any): any;
  export function dynCall_viiidddi(...args: any): any;
  export function dynCall_viiiiidiidd(...args: any): any;
  export function dynCall_iiiid(...args: any): any;
  export function dynCall_iiiddiiid(...args: any): any;
  export function dynCall_iiiiiiii(...args: any): any;
  export function dynCall_iiiddi(...args: any): any;
  export function dynCall_viiddiii(...args: any): any;
  export function dynCall_viiddiid(...args: any): any;
  export function dynCall_iiiiiiiididiii(...args: any): any;
  export function dynCall_iidddd(...args: any): any;
  export function dynCall_viidiiid(...args: any): any;
  export function dynCall_viiiidiiii(...args: any): any;
  export function dynCall_viidiiii(...args: any): any;
  export function dynCall_viiiiiiiiiiddi(...args: any): any;
  export function dynCall_diiiddi(...args: any): any;
  export function dynCall_viiididii(...args: any): any;
  export function dynCall_diiiiiiii(...args: any): any;
  export function dynCall_viiidiiid(...args: any): any;
  export function dynCall_viiiddddii(...args: any): any;
  export function dynCall_iiidiiiiiii(...args: any): any;
  export function dynCall_viiiiid(...args: any): any;
  export function dynCall_viiiiddddii(...args: any): any;
  export function dynCall_viiiiii(...args: any): any;
  export function dynCall_viiidiiii(...args: any): any;
  export function dynCall_viiiiiidi(...args: any): any;
  export function dynCall_viiiiiidiii(...args: any): any;
  export function dynCall_viiiidddii(...args: any): any;
  export function dynCall_viiidd(...args: any): any;
  export function dynCall_viiidi(...args: any): any;
  export function dynCall_iiidiiii(...args: any): any;
  export function dynCall_vidddd(...args: any): any;
  export function dynCall_viiddiddd(...args: any): any;
  export function dynCall_iiddd(...args: any): any;
  export function dynCall_viiiiiiiiii(...args: any): any;
  export function dynCall_iiiiiddidd(...args: any): any;
  export function dynCall_diiddi(...args: any): any;
  export function dynCall_iiiiiddi(...args: any): any;
  export function dynCall_diii(...args: any): any;
  export function dynCall_viiiddd(...args: any): any;
  export function dynCall_viidiiiii(...args: any): any;
  export function dynCall_iiiddii(...args: any): any;
  export function dynCall_viiiddidd(...args: any): any;
  export function dynCall_viiidiiiidi(...args: any): any;
  export function dynCall_viiiddiiiid(...args: any): any;
  export function dynCall_viiiddi(...args: any): any;
  export function dynCall_iiiiii(...args: any): any;
  export function dynCall_viiid(...args: any): any;
  export function dynCall_iiiiidii(...args: any): any;
  export function dynCall_viidii(...args: any): any;
  export function dynCall_iiiiid(...args: any): any;
  export function dynCall_viiiidddi(...args: any): any;
  export function dynCall_viiii(...args: any): any;
  export function dynCall_viiddiiid(...args: any): any;
  export function dynCall_viiiii(...args: any): any;
  export function dynCall_iiiiiiddi(...args: any): any;
  export function dynCall_viidiiiiiii(...args: any): any;
  export function dynCall_vid(...args: any): any;
  export function dynCall_iiidi(...args: any): any;
  export function dynCall_iiidd(...args: any): any;
  export function dynCall_vii(...args: any): any;
  export function dynCall_viiiid(...args: any): any;
  export function dynCall_viiiiddddi(...args: any): any;
  export function dynCall_iiiiidiii(...args: any): any;
  export function dynCall_viidd(...args: any): any;
  export function dynCall_viidi(...args: any): any;
  export function dynCall_viddd(...args: any): any;
  export function dynCall_viiidiiddi(...args: any): any;
  export function dynCall_iiiidii(...args: any): any;
  export function dynCall_diiid(...args: any): any;
  export function dynCall_viiidddii(...args: any): any;
  export function dynCall_viiiiiiii(...args: any): any;
  export function dynCall_viiidddiiii(...args: any): any;
  export function dynCall_viiiiiiid(...args: any): any;
  export function dynCall_viiiiiiddi(...args: any): any;
  export function dynCall_diiii(...args: any): any;
  export function dynCall_viiiiidiiddi(...args: any): any;
  export function dynCall_viiiddidddd(...args: any): any;
  export function dynCall_viiiiiiiiiiid(...args: any): any;
  export function dynCall_viiiiidii(...args: any): any;
  export function dynCall_viiiddiddd(...args: any): any;
  export function dynCall_iid(...args: any): any;
  export function dynCall_viiiddid(...args: any): any;
  export function dynCall_viiiiiii(...args: any): any;
  export function dynCall_viididdi(...args: any): any;
  export function dynCall_viiiiiid(...args: any): any;
  export function dynCall_viiiiiiiii(...args: any): any;
  export function dynCall_iii(...args: any): any;
  export function dynCall_viiddi(...args: any): any;
  export function dynCall_viiididi(...args: any): any;
  export function dynCall_vdiii(...args: any): any;
  export function dynCall_viiiiiidii(...args: any): any;
  export function dynCall_viiiiddidd(...args: any): any;
  export function dynCall_viiiidddiii(...args: any): any;
  export function dynCall_viii(...args: any): any;
  export function dynCall_v(...args: any): any;
  export function dynCall_viid(...args: any): any;
  export function dynCall_viiidddiii(...args: any): any;
  export function dynCall_iiiddiid(...args: any): any;
  export function dynCall_viiiiidiiii(...args: any): any;
  export function dynCall_vi(...args: any): any;
  export function dynCall_viiiidiiiidi(...args: any): any;
  export function dynCall_ii(...args: any): any;
  export function dynCall_viiiiiiiddi(...args: any): any;
  export function dynCall_vididdi(...args: any): any;
  export function dynCall_viiiiiidd(...args: any): any;
  export function dynCall_vidii(...args: any): any;
  export function dynCall_iiiidiii(...args: any): any;
  export function dynCall_viiiidi(...args: any): any;
  export function dynCall_viiiddiii(...args: any): any;
  export function dynCall_viidiiiiii(...args: any): any;
  export function dynCall_iiii(...args: any): any;
  export function dynCall_viididii(...args: any): any;
  export function dynCall_viiiidddd(...args: any): any;
  export function dynCall_viiiiddii(...args: any): any;
  export function dynCall_viiiiddid(...args: any): any;
  export function dynCall_iiid(...args: any): any;
  export function dynCall_viiiiiiiiidd(...args: any): any;
  export function dynCall_viiiidii(...args: any): any;
  export function dynCall_diiiii(...args: any): any;
  export function dynCall_diiiid(...args: any): any;
  export function dynCall_iiiiiiiiiiiii(...args: any): any;
  export function dynCall_iiiiidd(...args: any): any;
  export function dynCall_viiidii(...args: any): any;
  export function dynCall_iiiiidi(...args: any): any;
  export function dynCall_iiidiii(...args: any): any;
  export function dynCall_iiidiiiiii(...args: any): any;
  export function dynCall_i(...args: any): any;
  export function dynCall_iiidii(...args: any): any;
  export function dynCall_diiiiii(...args: any): any;
  export function dynCall_iiidiiiii(...args: any): any;
  export function dynCall_vididdii(...args: any): any;
  export function dynCall_viiiiiidiiiii(...args: any): any;
  export function dynCall_iiiiiidd(...args: any): any;
  export function dynCall_viiiiidiii(...args: any): any;
  export function dynCall_viididi(...args: any): any;
  export function dynCall_iiiiiiiii(...args: any): any;
  export function dynCall_viididdii(...args: any): any;
  export function dynCall_viiiiidiid(...args: any): any;
  export function dynCall_viiiidd(...args: any): any;
  export function dynCall_vidiii(...args: any): any;
  export namespace asm {
    export function dynCall_vididdi(...args: any): any;
    export function ___cxx_global_var_init(...args: any): any;
    export function dynCall_iiidii(...args: any): any;
    export function dynCall_viiiidiidd(...args: any): any;
    export function dynCall_viiiiiiiiidd(...args: any): any;
    export function dynCall_viiiddiiid(...args: any): any;
    export function dynCall_viiiiidi(...args: any): any;
    export function dynCall_viiidiiiidi(...args: any): any;
    export function _bitshift64Lshr(...args: any): any;
    export function dynCall_viiiiddidd(...args: any): any;
    export function dynCall_viiiiidd(...args: any): any;
    export function dynCall_viiididi(...args: any): any;
    export function __GLOBAL__sub_I_versions_pb_cc(...args: any): any;
    export function dynCall_viiidddii(...args: any): any;
    export function dynCall_iiiddiiid(...args: any): any;
    export function dynCall_viiiiiiiiiid(...args: any): any;
    export function dynCall_diii(...args: any): any;
    export function dynCall_viiiiiiiiiii(...args: any): any;
    export function _bitshift64Ashr(...args: any): any;
    export function dynCall_viiiiidiiddi(...args: any): any;
    export function dynCall_viiddidd(...args: any): any;
    export function _sbrk(...args: any): any;
    export function __GLOBAL__sub_I_imgwarp_cpp(...args: any): any;
    export function _memcpy(...args: any): any;
    export function dynCall_iiiiiddiddi(...args: any): any;
    export function dynCall_vi(...args: any): any;
    export function dynCall_iiid(...args: any): any;
    export function __GLOBAL__sub_I_bind_cpp(...args: any): any;
    export function dynCall_viiiiddiiid(...args: any): any;
    export function dynCall_viiidiiii(...args: any): any;
    export function dynCall_viiiiiidd(...args: any): any;
    export function dynCall_viiiiddiiii(...args: any): any;
    export function dynCall_vidiii(...args: any): any;
    export function dynCall_viiidiiid(...args: any): any;
    export function dynCall_iiii(...args: any): any;
    export function dynCall_iiidd(...args: any): any;
    export function __GLOBAL__I_000101(...args: any): any;
    export function dynCall_viidiiiiiii(...args: any): any;
    export function dynCall_viidiiid(...args: any): any;
    export function _emscripten_get_global_libc(...args: any): any;
    export function dynCall_iiidiiiii(...args: any): any;
    export function dynCall_iiidi(...args: any): any;
    export function dynCall_iiiiiiii(...args: any): any;
    export function dynCall_viidiiii(...args: any): any;
    export function __GLOBAL__sub_I_opencv_caffe_pb_cc(...args: any): any;
    export function stackSave(...args: any): any;
    export function dynCall_viiiii(...args: any): any;
    export function ___cxa_can_catch(...args: any): any;
    export function _free(...args: any): any;
    export function runPostSets(...args: any): any;
    export function dynCall_viiiiii(...args: any): any;
    export function dynCall_viiiid(...args: any): any;
    export function dynCall_viiiiid(...args: any): any;
    export function dynCall_diiiddi(...args: any): any;
    export function dynCall_iiiiiddi(...args: any): any;
    export function dynCall_iiidiiii(...args: any): any;
    export function dynCall_iiiiii(...args: any): any;
    export function dynCall_viiiiddid(...args: any): any;
    export function dynCall_viiiiiiidi(...args: any): any;
    export function dynCall_viiiiddd(...args: any): any;
    export function dynCall_diiiiiiii(...args: any): any;
    export function dynCall_viiiidiiddi(...args: any): any;
    export function dynCall_viiiiddi(...args: any): any;
    export function dynCall_diiiid(...args: any): any;
    export function ___cxx_global_var_init_29(...args: any): any;
    export function ___cxx_global_var_init_28(...args: any): any;
    export function dynCall_viiidddd(...args: any): any;
    export function dynCall_iiiidd(...args: any): any;
    export function dynCall_viiiddddi(...args: any): any;
    export function dynCall_viiidddi(...args: any): any;
    export function dynCall_iiiidi(...args: any): any;
    export function dynCall_vidii(...args: any): any;
    export function dynCall_viiiddiii(...args: any): any;
    export function setThrew(...args: any): any;
    export function dynCall_viiiiiiiddi(...args: any): any;
    export function dynCall_viiiiiddi(...args: any): any;
    export function dynCall_viid(...args: any): any;
    export function dynCall_viiiiddiddi(...args: any): any;
    export function dynCall_viiddiiid(...args: any): any;
    export function dynCall_viiiiidiiiii(...args: any): any;
    export function dynCall_viiiddiiiid(...args: any): any;
    export function dynCall_viiiddiiii(...args: any): any;
    export function dynCall_iiiii(...args: any): any;
    export function dynCall_viiiddidddd(...args: any): any;
    export function ___cxa_is_pointer_type(...args: any): any;
    export function _llvm_ctlz_i64(...args: any): any;
    export function dynCall_iiiid(...args: any): any;
    export function dynCall_viididdi(...args: any): any;
    export function dynCall_viiiidddd(...args: any): any;
    export function __GLOBAL__sub_I_status_cc(...args: any): any;
    export function dynCall_iiidiii(...args: any): any;
    export function dynCall_viiiiidiidd(...args: any): any;
    export function dynCall_viiiiddddii(...args: any): any;
    export function dynCall_viiiiiiidd(...args: any): any;
    export function dynCall_viiiddd(...args: any): any;
    export function stackAlloc(...args: any): any;
    export function dynCall_iiiiidd(...args: any): any;
    export function dynCall_viiiddi(...args: any): any;
    export function dynCall_viididii(...args: any): any;
    export function dynCall_iiiiidi(...args: any): any;
    export function dynCall_viiiidddi(...args: any): any;
    export function __GLOBAL__sub_I_color_lab_cpp(...args: any): any;
    export function ___divdi3(...args: any): any;
    export function getTempRet0(...args: any): any;
    export function ___cxx_global_var_init_38(...args: any): any;
    export function dynCall_iiidiiiiiii(...args: any): any;
    export function ___cxx_global_var_init_34(...args: any): any;
    export function ___cxx_global_var_init_35(...args: any): any;
    export function ___cxx_global_var_init_36(...args: any): any;
    export function ___cxx_global_var_init_37(...args: any): any;
    export function ___cxx_global_var_init_30(...args: any): any;
    export function ___cxx_global_var_init_31(...args: any): any;
    export function ___cxx_global_var_init_32(...args: any): any;
    export function ___cxx_global_var_init_33(...args: any): any;
    export function dynCall_diiii(...args: any): any;
    export function dynCall_viiiidi(...args: any): any;
    export function dynCall_viiid(...args: any): any;
    export function dynCall_dii(...args: any): any;
    export function dynCall_vdii(...args: any): any;
    export function __GLOBAL__sub_I_dnn_cpp(...args: any): any;
    export function dynCall_viiii(...args: any): any;
    export function dynCall_iiidiiiiii(...args: any): any;
    export function _llvm_bswap_i32(...args: any): any;
    export function __GLOBAL__sub_I_message_cc(...args: any): any;
    export function dynCall_diiiiiii(...args: any): any;
    export function dynCall_vididdii(...args: any): any;
    export function establishStackSpace(...args: any): any;
    export function dynCall_viddd(...args: any): any;
    export function dynCall_viiiidddiii(...args: any): any;
    export function dynCall_viiidddiiii(...args: any): any;
    export function dynCall_viiiidii(...args: any): any;
    export function _pthread_mutex_lock(...args: any): any;
    export function __GLOBAL__sub_I_kmeans_cpp(...args: any): any;
    export function __GLOBAL__sub_I_function_pb_cc(...args: any): any;
    export function dynCall_viiiiiiddi(...args: any): any;
    export function dynCall_viiddi(...args: any): any;
    export function __GLOBAL__sub_I_umatrix_cpp(...args: any): any;
    export function dynCall_viiidiiddi(...args: any): any;
    export function dynCall_i(...args: any): any;
    export function dynCall_iiiidiii(...args: any): any;
    export function dynCall_viiiiiiiiii(...args: any): any;
    export function dynCall_iiiiiii(...args: any): any;
    export function dynCall_vidddd(...args: any): any;
    export function __GLOBAL__sub_I_system_cpp(...args: any): any;
    export function __GLOBAL__sub_I_graph_pb_cc(...args: any): any;
    export function dynCall_diiiiii(...args: any): any;
    export function dynCall_vdiii(...args: any): any;
    export function dynCall_iiiiiid(...args: any): any;
    export function dynCall_viiididii(...args: any): any;
    export function dynCall_viiddii(...args: any): any;
    export function dynCall_diiiii(...args: any): any;
    export function dynCall_iiiiiiiii(...args: any): any;
    export function dynCall_iid(...args: any): any;
    export function dynCall_iii(...args: any): any;
    export function dynCall_viiiidddii(...args: any): any;
    export function dynCall_viiddid(...args: any): any;
    export function _memset(...args: any): any;
    export function dynCall_diiddi(...args: any): any;
    export function dynCall_viididi(...args: any): any;
    export function __GLOBAL__sub_I_darknet_io_cpp(...args: any): any;
    export function dynCall_viiidi(...args: any): any;
    export function __GLOBAL__sub_I_prior_box_layer_cpp(...args: any): any;
    export function dynCall_viiidd(...args: any): any;
    export function dynCall_viiiiiidiiiii(...args: any): any;
    export function dynCall_iidddd(...args: any): any;
    export function _i64Subtract(...args: any): any;
    export function dynCall_viiiiddiii(...args: any): any;
    export function __GLOBAL__sub_I_init_cpp(...args: any): any;
    export function setTempRet0(...args: any): any;
    export function dynCall_viiiddiddd(...args: any): any;
    export function dynCall_viiiiiid(...args: any): any;
    export function dynCall_viiiiidiid(...args: any): any;
    export function __GLOBAL__sub_I_op_def_pb_cc(...args: any): any;
    export function dynCall_iiiiiddidd(...args: any): any;
    export function ___remdi3(...args: any): any;
    export function __GLOBAL__sub_I_iostream_cpp(...args: any): any;
    export function dynCall_viiiddddii(...args: any): any;
    export function dynCall_viiidddiii(...args: any): any;
    export function _pthread_cond_broadcast(...args: any): any;
    export function __GLOBAL__sub_I_descriptor_pb_cc(...args: any): any;
    export function dynCall_viiiiiidiii(...args: any): any;
    export function __GLOBAL__sub_I_tensor_shape_pb_cc(...args: any): any;
    export function dynCall_iidd(...args: any): any;
    export function dynCall_vidd(...args: any): any;
    export function dynCall_viiiiiidiiii(...args: any): any;
    export function dynCall_iiiiidii(...args: any): any;
    export function dynCall_viiiiddii(...args: any): any;
    export function dynCall_iiiiidiii(...args: any): any;
    export function dynCall_viiiiiidi(...args: any): any;
    export function dynCall_vidi(...args: any): any;
    export function dynCall_iidi(...args: any): any;
    export function _malloc(...args: any): any;
    export function dynCall_viiddiii(...args: any): any;
    export function _emscripten_replace_memory(...args: any): any;
    export function dynCall_viidiii(...args: any): any;
    export function dynCall_viiiiddiiiid(...args: any): any;
    export function dynCall_v(...args: any): any;
    export function dynCall_viiddiid(...args: any): any;
    export function __GLOBAL__sub_I_attr_value_pb_cc(...args: any): any;
    export function dynCall_viidii(...args: any): any;
    export function dynCall_viiiiiiiiiiid(...args: any): any;
    export function dynCall_viiiiiii(...args: any): any;
    export function dynCall_iiiiiiiididiii(...args: any): any;
    export function dynCall_viidi(...args: any): any;
    export function dynCall_iiiiiiddi(...args: any): any;
    export function ___udivdi3(...args: any): any;
    export function dynCall_vid(...args: any): any;
    export function dynCall_di(...args: any): any;
    export function dynCall_diiid(...args: any): any;
    export function __GLOBAL__sub_I_tensor_pb_cc(...args: any): any;
    export function __GLOBAL__sub_I_opencv_onnx_pb_cc(...args: any): any;
    export function dynCall_viidiiiii(...args: any): any;
    export function _bitshift64Shl(...args: any): any;
    export function dynCall_viiiiiiiiiiddi(...args: any): any;
    export function _fflush(...args: any): any;
    export function dynCall_viiiiiiid(...args: any): any;
    export function __GLOBAL__sub_I_types_pb_cc(...args: any): any;
    export function dynCall_viiiiidiii(...args: any): any;
    export function dynCall_viidiiiiii(...args: any): any;
    export function dynCall_viiiiidiiii(...args: any): any;
    export function ___cxa_demangle(...args: any): any;
    export function __GLOBAL__sub_I_detection_output_layer_cpp(
      ...args: any
    ): any;
    export function dynCall_iiiiiddid(...args: any): any;
    export function ___muldi3(...args: any): any;
    export function dynCall_viiiidd(...args: any): any;
    export function dynCall_vii(...args: any): any;
    export function ___uremdi3(...args: any): any;
    export function dynCall_viiiiiiiii(...args: any): any;
    export function dynCall_iiiiiidd(...args: any): any;
    export function dynCall_viiiiiiii(...args: any): any;
    export function dynCall_iiiddii(...args: any): any;
    export function dynCall_viiiiddddi(...args: any): any;
    export function _i64Add(...args: any): any;
    export function dynCall_viiiiiidii(...args: any): any;
    export function _pthread_mutex_unlock(...args: any): any;
    export function dynCall_viiidii(...args: any): any;
    export function dynCall_viiiidiii(...args: any): any;
    export function stackRestore(...args: any): any;
    export function dynCall_iiddd(...args: any): any;
    export function ___getTypeName(...args: any): any;
    export function dynCall_viiiddid(...args: any): any;
    export function dynCall_viii(...args: any): any;
    export function dynCall_iiiiiiiiiiiii(...args: any): any;
    export function dynCall_viiiddii(...args: any): any;
    export function dynCall_viiiidiid(...args: any): any;
    export function ___errno_location(...args: any): any;
    export function dynCall_viididdii(...args: any): any;
    export function dynCall_viidd(...args: any): any;
    export function dynCall_ii(...args: any): any;
    export function dynCall_iiiiid(...args: any): any;
    export function _memmove(...args: any): any;
    export function dynCall_viiiiidii(...args: any): any;
    export function dynCall_viiiddidd(...args: any): any;
    export function __GLOBAL__sub_I_bindings_cpp(...args: any): any;
    export function dynCall_viiddiddd(...args: any): any;
    export function dynCall_iiiddi(...args: any): any;
    export function dynCall_iiiddiid(...args: any): any;
    export function dynCall_viiiidiiiidi(...args: any): any;
    export function dynCall_iiiiddi(...args: any): any;
    export function dynCall_iiiidii(...args: any): any;
    export function dynCall_viiiidiiii(...args: any): any;
    export function dynCall_viiidiii(...args: any): any;
    export function dynCall_viiiidddiiii(...args: any): any;
    export function dynCall_viiddidddd(...args: any): any;
  }
  export function then(...args: any): any;
  export function callMain(...args: any): any;
  export function run(...args: any): any;
  export function exit(...args: any): any;
  export function abort(...args: any): any;
  export function calledRun(...args: any): any;
  export function stdin(...args: any): any;
  export function stdout(...args: any): any;
  export function stderr(...args: any): any;
  export class IntVector {
    push_back: any;

    resize: any;

    size: any;

    get: any;

    set: any;
  }
  export class FloatVector {
    push_back: any;

    resize: any;

    size: any;

    get: any;

    set: any;
  }
  export class DoubleVector {
    push_back: any;

    resize: any;

    size: any;

    get: any;

    set: any;
  }
  export class PointVector {
    push_back: any;

    resize: any;

    size: any;

    get: any;

    set: any;
  }
  export class MatVector {
    push_back: any;

    resize: any;

    size: any;

    get: any;

    set: any;
  }
  export class RectVector {
    push_back: any;

    resize: any;

    size: any;

    get: any;

    set: any;
  }
  export class KeyPointVector {
    push_back: any;

    resize: any;

    size: any;

    get: any;

    set: any;
  }
  export function Mat(...args: any): any;
  export function rotatedRectPoints(...args: any): any;
  export function rotatedRectBoundingRect(...args: any): any;
  export function rotatedRectBoundingRect2f(...args: any): any;
  export function exceptionFromPtr(...args: any): any;
  export function minEnclosingCircle(...args: any): any;
  export function minMaxLoc(...args: any): any;
  export function morphologyDefaultBorderValue(...args: any): any;
  export function CV_MAT_DEPTH(...args: any): any;
  export function CamShift(...args: any): any;
  export function meanShift(...args: any): any;
  export function getBuildInformation(...args: any): any;
  export function CV_8UC1(...args: any): any;
  export function CV_8UC2(...args: any): any;
  export function CV_8UC3(...args: any): any;
  export function CV_8UC4(...args: any): any;
  export function CV_8SC1(...args: any): any;
  export function CV_8SC2(...args: any): any;
  export function CV_8SC3(...args: any): any;
  export function CV_8SC4(...args: any): any;
  export function CV_16UC1(...args: any): any;
  export function CV_16UC2(...args: any): any;
  export function CV_16UC3(...args: any): any;
  export function CV_16UC4(...args: any): any;
  export function CV_16SC1(...args: any): any;
  export function CV_16SC2(...args: any): any;
  export function CV_16SC3(...args: any): any;
  export function CV_16SC4(...args: any): any;
  export function CV_32SC1(...args: any): any;
  export function CV_32SC2(...args: any): any;
  export function CV_32SC3(...args: any): any;
  export function CV_32SC4(...args: any): any;
  export function CV_32FC1(...args: any): any;
  export function CV_32FC2(...args: any): any;
  export function CV_32FC3(...args: any): any;
  export function CV_32FC4(...args: any): any;
  export function CV_64FC1(...args: any): any;
  export function CV_64FC2(...args: any): any;
  export function CV_64FC3(...args: any): any;
  export function CV_64FC4(...args: any): any;
  export function CV_8U(...args: any): any;
  export function CV_8S(...args: any): any;
  export function CV_16U(...args: any): any;
  export function CV_16S(...args: any): any;
  export function CV_32S(...args: any): any;
  export function CV_32F(...args: any): any;
  export function CV_64F(...args: any): any;
  export function INT_MIN(...args: any): any;
  export function INT_MAX(...args: any): any;
  export function Canny(...args: any): any;
  export function Canny1(...args: any): any;
  export function GaussianBlur(...args: any): any;
  export function HoughCircles(...args: any): any;
  export function HoughLines(...args: any): any;
  export function HoughLinesP(...args: any): any;
  export function Laplacian(...args: any): any;
  export function Scharr(...args: any): any;
  export function Sobel(...args: any): any;
  export function absdiff(...args: any): any;
  export function adaptiveThreshold(...args: any): any;
  export function add(...args: any): any;
  export function addWeighted(...args: any): any;
  export function approxPolyDP(...args: any): any;
  export function arcLength(...args: any): any;
  export function bilateralFilter(...args: any): any;
  export function bitwise_and(...args: any): any;
  export function bitwise_not(...args: any): any;
  export function bitwise_or(...args: any): any;
  export function bitwise_xor(...args: any): any;
  export function blur(...args: any): any;
  export function boundingRect(...args: any): any;
  export function boxFilter(...args: any): any;
  export function calcBackProject(...args: any): any;
  export function calcHist(...args: any): any;
  export function calcOpticalFlowFarneback(...args: any): any;
  export function calcOpticalFlowPyrLK(...args: any): any;
  export function cartToPolar(...args: any): any;
  export function circle(...args: any): any;
  export function compare(...args: any): any;
  export function compareHist(...args: any): any;
  export function connectedComponents(...args: any): any;
  export function connectedComponentsWithStats(...args: any): any;
  export function contourArea(...args: any): any;
  export function convertScaleAbs(...args: any): any;
  export function convexHull(...args: any): any;
  export function convexityDefects(...args: any): any;
  export function copyMakeBorder(...args: any): any;
  export function cornerHarris(...args: any): any;
  export function cornerMinEigenVal(...args: any): any;
  export function countNonZero(...args: any): any;
  export function cvtColor(...args: any): any;
  export function demosaicing(...args: any): any;
  export function determinant(...args: any): any;
  export function dft(...args: any): any;
  export function dilate(...args: any): any;
  export function distanceTransform(...args: any): any;
  export function distanceTransformWithLabels(...args: any): any;
  export function divide(...args: any): any;
  export function divide1(...args: any): any;
  export function drawContours(...args: any): any;
  export function drawKeypoints(...args: any): any;
  export function drawMatches(...args: any): any;
  export function eigen(...args: any): any;
  export function ellipse(...args: any): any;
  export function ellipse1(...args: any): any;
  export function ellipse2Poly(...args: any): any;
  export function equalizeHist(...args: any): any;
  export function erode(...args: any): any;
  export function exp(...args: any): any;
  export function filter2D(...args: any): any;
  export function findContours(...args: any): any;
  export function findTransformECC(...args: any): any;
  export function fitEllipse(...args: any): any;
  export function fitLine(...args: any): any;
  export function flip(...args: any): any;
  export function gemm(...args: any): any;
  export function getAffineTransform(...args: any): any;
  export function getOptimalDFTSize(...args: any): any;
  export function getPerspectiveTransform(...args: any): any;
  export function getRotationMatrix2D(...args: any): any;
  export function getStructuringElement(...args: any): any;
  export function goodFeaturesToTrack(...args: any): any;
  export function goodFeaturesToTrack1(...args: any): any;
  export function grabCut(...args: any): any;
  export function groupRectangles(...args: any): any;
  export function hconcat(...args: any): any;
  export function inRange(...args: any): any;
  export function integral(...args: any): any;
  export function integral2(...args: any): any;
  export function invert(...args: any): any;
  export function isContourConvex(...args: any): any;
  export function kmeans(...args: any): any;
  export function line(...args: any): any;
  export function log(...args: any): any;
  export function magnitude(...args: any): any;
  export function matchShapes(...args: any): any;
  export function matchTemplate(...args: any): any;
  export function max(...args: any): any;
  export function mean(...args: any): any;
  export function meanStdDev(...args: any): any;
  export function medianBlur(...args: any): any;
  export function merge(...args: any): any;
  export function min(...args: any): any;
  export function minAreaRect(...args: any): any;
  export function mixChannels(...args: any): any;
  export function moments(...args: any): any;
  export function morphologyEx(...args: any): any;
  export function multiply(...args: any): any;
  export function norm(...args: any): any;
  export function norm1(...args: any): any;
  export function normalize(...args: any): any;
  export function perspectiveTransform(...args: any): any;
  export function pointPolygonTest(...args: any): any;
  export function polarToCart(...args: any): any;
  export function pow(...args: any): any;
  export function putText(...args: any): any;
  export function pyrDown(...args: any): any;
  export function pyrUp(...args: any): any;
  export function randn(...args: any): any;
  export function randu(...args: any): any;
  export function rectangle(...args: any): any;
  export function rectangle1(...args: any): any;
  export function reduce(...args: any): any;
  export function remap(...args: any): any;
  export function repeat(...args: any): any;
  export function resize(...args: any): any;
  export function sepFilter2D(...args: any): any;
  export function setIdentity(...args: any): any;
  export function setRNGSeed(...args: any): any;
  export function solve(...args: any): any;
  export function solvePoly(...args: any): any;
  export function split(...args: any): any;
  export function sqrt(...args: any): any;
  export function subtract(...args: any): any;
  export function threshold(...args: any): any;
  export function trace(...args: any): any;
  export function transform(...args: any): any;
  export function transpose(...args: any): any;
  export function vconcat(...args: any): any;
  export function warpAffine(...args: any): any;
  export function warpPerspective(...args: any): any;
  export function watershed(...args: any): any;
  export function blobFromImage(...args: any): any;
  export function readNet(...args: any): any;
  export function readNet1(...args: any): any;
  export function readNetFromCaffe(...args: any): any;
  export function readNetFromCaffe1(...args: any): any;
  export function readNetFromDarknet(...args: any): any;
  export function readNetFromDarknet1(...args: any): any;
  export function readNetFromONNX(...args: any): any;
  export function readNetFromTensorflow(...args: any): any;
  export function readNetFromTensorflow1(...args: any): any;
  export function readNetFromTorch(...args: any): any;
  export class MergeMertens {
    setExposureWeight: any;

    getContrastWeight: any;

    getExposureWeight: any;

    process: any;

    process1: any;

    getSaturationWeight: any;

    setSaturationWeight: any;

    setContrastWeight: any;
  }
  export class CalibrateRobertson {
    getThreshold: any;

    getRadiance: any;

    setThreshold: any;

    setMaxIter: any;

    getMaxIter: any;
  }
  export function HOGDescriptor(...args: any): any;
  export class dnn_Net {
    setInput: any;

    forward: any;

    forward1: any;

    forward2: any;
  }
  export class MergeDebevec {
    process: any;

    process1: any;
  }
  export class BackgroundSubtractor {
    apply: any;

    getBackgroundImage: any;
  }
  export function AlignMTB(...args: any): any;
  export class KAZE {
    setExtended: any;

    setNOctaveLayers: any;

    getNOctaves: any;

    getNOctaveLayers: any;

    setNOctaves: any;

    getUpright: any;

    getExtended: any;

    setUpright: any;

    setDiffusivity: any;

    getThreshold: any;

    getDefaultName: any;

    getDiffusivity: any;

    setThreshold: any;
  }
  export function BackgroundSubtractorMOG2(...args: any): any;
  export class TonemapMantiuk {
    getSaturation: any;

    getScale: any;

    setSaturation: any;

    setScale: any;
  }
  export namespace Tonemap {
    export function process(...args: any): any;
    export function setGamma(...args: any): any;
    export function getGamma(...args: any): any;
  }
  export class CLAHE {
    setTilesGridSize: any;

    collectGarbage: any;

    setClipLimit: any;

    getTilesGridSize: any;

    getClipLimit: any;

    apply: any;
  }
  export class FastFeatureDetector {
    getDefaultName: any;

    getNonmaxSuppression: any;

    getThreshold: any;

    getType: any;

    setNonmaxSuppression: any;

    setThreshold: any;

    setType: any;
  }
  export class CalibrateCRF {
    process: any;
  }
  export class AKAZE {
    setNOctaveLayers: any;

    getDefaultName: any;

    setDescriptorType: any;

    getNOctaveLayers: any;

    setNOctaves: any;

    getDescriptorType: any;

    getThreshold: any;

    getNOctaves: any;

    setDescriptorChannels: any;

    setThreshold: any;

    getDescriptorChannels: any;

    setDescriptorSize: any;

    setDiffusivity: any;

    getDiffusivity: any;

    getDescriptorSize: any;
  }
  export class MergeExposures {
    process: any;
  }
  export class CalibrateDebevec {
    setRandom: any;

    getRandom: any;

    getSamples: any;

    setLambda: any;

    setSamples: any;

    getLambda: any;
  }
  export function Algorithm(...args: any): any;
  export class Feature2D {
    getDefaultName: any;

    detect: any;

    detect1: any;

    compute: any;

    compute1: any;

    defaultNorm: any;

    detectAndCompute: any;

    descriptorSize: any;

    descriptorType: any;

    empty: any;
  }
  export class MergeRobertson {
    process: any;

    process1: any;
  }
  export class GFTTDetector {
    getBlockSize: any;

    getDefaultName: any;

    getK: any;

    setHarrisDetector: any;

    setBlockSize: any;

    setQualityLevel: any;

    setMaxFeatures: any;

    setK: any;

    getMaxFeatures: any;

    setMinDistance: any;

    getMinDistance: any;

    getQualityLevel: any;

    getHarrisDetector: any;
  }
  export class DescriptorMatcher {
    radiusMatch: any;

    radiusMatch1: any;

    clear: any;

    knnMatch: any;

    knnMatch1: any;

    add: any;

    train: any;

    match: any;

    match1: any;

    isMaskSupported: any;

    empty: any;
  }
  export class MSER {
    getDefaultName: any;

    getPass2Only: any;

    setMinArea: any;

    getDelta: any;

    getMaxArea: any;

    setMaxArea: any;

    setPass2Only: any;

    getMinArea: any;

    detectRegions: any;

    setDelta: any;
  }
  export function BFMatcher(...args: any): any;
  export class AgastFeatureDetector {
    getDefaultName: any;

    getNonmaxSuppression: any;

    getThreshold: any;

    getType: any;

    setNonmaxSuppression: any;

    setThreshold: any;

    setType: any;
  }
  export class CascadeClassifier {
    load: any;

    detectMultiScale2: any;

    detectMultiScale3: any;

    empty: any;

    detectMultiScale: any;
  }
  export class TonemapReinhard {
    setColorAdaptation: any;

    setLightAdaptation: any;

    getIntensity: any;

    getLightAdaptation: any;

    setIntensity: any;

    getColorAdaptation: any;
  }
  export class TonemapDrago {
    setBias: any;

    getSaturation: any;

    getBias: any;

    setSaturation: any;
  }
  export class ORB {
    getDefaultName: any;

    setEdgeThreshold: any;

    setFirstLevel: any;

    getFastThreshold: any;

    setMaxFeatures: any;

    setNLevels: any;

    setPatchSize: any;

    setWTA_K: any;

    setScaleFactor: any;

    setScoreType: any;
  }
  export class BRISK {
    getDefaultName: any;
  }
  export function ACCESS_FAST(...args: any): any;
  export function ACCESS_MASK(...args: any): any;
  export function ACCESS_READ(...args: any): any;
  export function ACCESS_RW(...args: any): any;
  export function ACCESS_WRITE(...args: any): any;
  export function ADAPTIVE_THRESH_GAUSSIAN_C(...args: any): any;
  export function ADAPTIVE_THRESH_MEAN_C(...args: any): any;
  export function AKAZE_DESCRIPTOR_KAZE(...args: any): any;
  export function AKAZE_DESCRIPTOR_KAZE_UPRIGHT(...args: any): any;
  export function AKAZE_DESCRIPTOR_MLDB(...args: any): any;
  export function AKAZE_DESCRIPTOR_MLDB_UPRIGHT(...args: any): any;
  export function AgastFeatureDetector_AGAST_5_8(...args: any): any;
  export function AgastFeatureDetector_AGAST_7_12d(...args: any): any;
  export function AgastFeatureDetector_AGAST_7_12s(...args: any): any;
  export function AgastFeatureDetector_NONMAX_SUPPRESSION(...args: any): any;
  export function AgastFeatureDetector_OAST_9_16(...args: any): any;
  export function AgastFeatureDetector_THRESHOLD(...args: any): any;
  export function BORDER_CONSTANT(...args: any): any;
  export function BORDER_DEFAULT(...args: any): any;
  export function BORDER_ISOLATED(...args: any): any;
  export function BORDER_REFLECT(...args: any): any;
  export function BORDER_REFLECT101(...args: any): any;
  export function BORDER_REFLECT_101(...args: any): any;
  export function BORDER_REPLICATE(...args: any): any;
  export function BORDER_TRANSPARENT(...args: any): any;
  export function BORDER_WRAP(...args: any): any;
  export function CASCADE_DO_CANNY_PRUNING(...args: any): any;
  export function CASCADE_DO_ROUGH_SEARCH(...args: any): any;
  export function CASCADE_FIND_BIGGEST_OBJECT(...args: any): any;
  export function CASCADE_SCALE_IMAGE(...args: any): any;
  export function CCL_DEFAULT(...args: any): any;
  export function CCL_GRANA(...args: any): any;
  export function CCL_WU(...args: any): any;
  export function CC_STAT_AREA(...args: any): any;
  export function CC_STAT_HEIGHT(...args: any): any;
  export function CC_STAT_LEFT(...args: any): any;
  export function CC_STAT_MAX(...args: any): any;
  export function CC_STAT_TOP(...args: any): any;
  export function CC_STAT_WIDTH(...args: any): any;
  export function CHAIN_APPROX_NONE(...args: any): any;
  export function CHAIN_APPROX_SIMPLE(...args: any): any;
  export function CHAIN_APPROX_TC89_KCOS(...args: any): any;
  export function CHAIN_APPROX_TC89_L1(...args: any): any;
  export function CMP_EQ(...args: any): any;
  export function CMP_GE(...args: any): any;
  export function CMP_GT(...args: any): any;
  export function CMP_LE(...args: any): any;
  export function CMP_LT(...args: any): any;
  export function CMP_NE(...args: any): any;
  export function COLORMAP_AUTUMN(...args: any): any;
  export function COLORMAP_BONE(...args: any): any;
  export function COLORMAP_COOL(...args: any): any;
  export function COLORMAP_HOT(...args: any): any;
  export function COLORMAP_HSV(...args: any): any;
  export function COLORMAP_JET(...args: any): any;
  export function COLORMAP_OCEAN(...args: any): any;
  export function COLORMAP_PARULA(...args: any): any;
  export function COLORMAP_PINK(...args: any): any;
  export function COLORMAP_RAINBOW(...args: any): any;
  export function COLORMAP_SPRING(...args: any): any;
  export function COLORMAP_SUMMER(...args: any): any;
  export function COLORMAP_WINTER(...args: any): any;
  export function COLOR_BGR2BGR555(...args: any): any;
  export function COLOR_BGR2BGR565(...args: any): any;
  export function COLOR_BGR2BGRA(...args: any): any;
  export function COLOR_BGR2GRAY(...args: any): any;
  export function COLOR_BGR2HLS(...args: any): any;
  export function COLOR_BGR2HLS_FULL(...args: any): any;
  export function COLOR_BGR2HSV(...args: any): any;
  export function COLOR_BGR2HSV_FULL(...args: any): any;
  export function COLOR_BGR2Lab(...args: any): any;
  export function COLOR_BGR2Luv(...args: any): any;
  export function COLOR_BGR2RGB(...args: any): any;
  export function COLOR_BGR2RGBA(...args: any): any;
  export function COLOR_BGR2XYZ(...args: any): any;
  export function COLOR_BGR2YCrCb(...args: any): any;
  export function COLOR_BGR2YUV(...args: any): any;
  export function COLOR_BGR2YUV_I420(...args: any): any;
  export function COLOR_BGR2YUV_IYUV(...args: any): any;
  export function COLOR_BGR2YUV_YV12(...args: any): any;
  export function COLOR_BGR5552BGR(...args: any): any;
  export function COLOR_BGR5552BGRA(...args: any): any;
  export function COLOR_BGR5552GRAY(...args: any): any;
  export function COLOR_BGR5552RGB(...args: any): any;
  export function COLOR_BGR5552RGBA(...args: any): any;
  export function COLOR_BGR5652BGR(...args: any): any;
  export function COLOR_BGR5652BGRA(...args: any): any;
  export function COLOR_BGR5652GRAY(...args: any): any;
  export function COLOR_BGR5652RGB(...args: any): any;
  export function COLOR_BGR5652RGBA(...args: any): any;
  export function COLOR_BGRA2BGR(...args: any): any;
  export function COLOR_BGRA2BGR555(...args: any): any;
  export function COLOR_BGRA2BGR565(...args: any): any;
  export function COLOR_BGRA2GRAY(...args: any): any;
  export function COLOR_BGRA2RGB(...args: any): any;
  export function COLOR_BGRA2RGBA(...args: any): any;
  export function COLOR_BGRA2YUV_I420(...args: any): any;
  export function COLOR_BGRA2YUV_IYUV(...args: any): any;
  export function COLOR_BGRA2YUV_YV12(...args: any): any;
  export function COLOR_BayerBG2BGR(...args: any): any;
  export function COLOR_BayerBG2BGRA(...args: any): any;
  export function COLOR_BayerBG2BGR_EA(...args: any): any;
  export function COLOR_BayerBG2BGR_VNG(...args: any): any;
  export function COLOR_BayerBG2GRAY(...args: any): any;
  export function COLOR_BayerBG2RGB(...args: any): any;
  export function COLOR_BayerBG2RGBA(...args: any): any;
  export function COLOR_BayerBG2RGB_EA(...args: any): any;
  export function COLOR_BayerBG2RGB_VNG(...args: any): any;
  export function COLOR_BayerGB2BGR(...args: any): any;
  export function COLOR_BayerGB2BGRA(...args: any): any;
  export function COLOR_BayerGB2BGR_EA(...args: any): any;
  export function COLOR_BayerGB2BGR_VNG(...args: any): any;
  export function COLOR_BayerGB2GRAY(...args: any): any;
  export function COLOR_BayerGB2RGB(...args: any): any;
  export function COLOR_BayerGB2RGBA(...args: any): any;
  export function COLOR_BayerGB2RGB_EA(...args: any): any;
  export function COLOR_BayerGB2RGB_VNG(...args: any): any;
  export function COLOR_BayerGR2BGR(...args: any): any;
  export function COLOR_BayerGR2BGRA(...args: any): any;
  export function COLOR_BayerGR2BGR_EA(...args: any): any;
  export function COLOR_BayerGR2BGR_VNG(...args: any): any;
  export function COLOR_BayerGR2GRAY(...args: any): any;
  export function COLOR_BayerGR2RGB(...args: any): any;
  export function COLOR_BayerGR2RGBA(...args: any): any;
  export function COLOR_BayerGR2RGB_EA(...args: any): any;
  export function COLOR_BayerGR2RGB_VNG(...args: any): any;
  export function COLOR_BayerRG2BGR(...args: any): any;
  export function COLOR_BayerRG2BGRA(...args: any): any;
  export function COLOR_BayerRG2BGR_EA(...args: any): any;
  export function COLOR_BayerRG2BGR_VNG(...args: any): any;
  export function COLOR_BayerRG2GRAY(...args: any): any;
  export function COLOR_BayerRG2RGB(...args: any): any;
  export function COLOR_BayerRG2RGBA(...args: any): any;
  export function COLOR_BayerRG2RGB_EA(...args: any): any;
  export function COLOR_BayerRG2RGB_VNG(...args: any): any;
  export function COLOR_COLORCVT_MAX(...args: any): any;
  export function COLOR_GRAY2BGR(...args: any): any;
  export function COLOR_GRAY2BGR555(...args: any): any;
  export function COLOR_GRAY2BGR565(...args: any): any;
  export function COLOR_GRAY2BGRA(...args: any): any;
  export function COLOR_GRAY2RGB(...args: any): any;
  export function COLOR_GRAY2RGBA(...args: any): any;
  export function COLOR_HLS2BGR(...args: any): any;
  export function COLOR_HLS2BGR_FULL(...args: any): any;
  export function COLOR_HLS2RGB(...args: any): any;
  export function COLOR_HLS2RGB_FULL(...args: any): any;
  export function COLOR_HSV2BGR(...args: any): any;
  export function COLOR_HSV2BGR_FULL(...args: any): any;
  export function COLOR_HSV2RGB(...args: any): any;
  export function COLOR_HSV2RGB_FULL(...args: any): any;
  export function COLOR_LBGR2Lab(...args: any): any;
  export function COLOR_LBGR2Luv(...args: any): any;
  export function COLOR_LRGB2Lab(...args: any): any;
  export function COLOR_LRGB2Luv(...args: any): any;
  export function COLOR_Lab2BGR(...args: any): any;
  export function COLOR_Lab2LBGR(...args: any): any;
  export function COLOR_Lab2LRGB(...args: any): any;
  export function COLOR_Lab2RGB(...args: any): any;
  export function COLOR_Luv2BGR(...args: any): any;
  export function COLOR_Luv2LBGR(...args: any): any;
  export function COLOR_Luv2LRGB(...args: any): any;
  export function COLOR_Luv2RGB(...args: any): any;
  export function COLOR_RGB2BGR(...args: any): any;
  export function COLOR_RGB2BGR555(...args: any): any;
  export function COLOR_RGB2BGR565(...args: any): any;
  export function COLOR_RGB2BGRA(...args: any): any;
  export function COLOR_RGB2GRAY(...args: any): any;
  export function COLOR_RGB2HLS(...args: any): any;
  export function COLOR_RGB2HLS_FULL(...args: any): any;
  export function COLOR_RGB2HSV(...args: any): any;
  export function COLOR_RGB2HSV_FULL(...args: any): any;
  export function COLOR_RGB2Lab(...args: any): any;
  export function COLOR_RGB2Luv(...args: any): any;
  export function COLOR_RGB2RGBA(...args: any): any;
  export function COLOR_RGB2XYZ(...args: any): any;
  export function COLOR_RGB2YCrCb(...args: any): any;
  export function COLOR_RGB2YUV(...args: any): any;
  export function COLOR_RGB2YUV_I420(...args: any): any;
  export function COLOR_RGB2YUV_IYUV(...args: any): any;
  export function COLOR_RGB2YUV_YV12(...args: any): any;
  export function COLOR_RGBA2BGR(...args: any): any;
  export function COLOR_RGBA2BGR555(...args: any): any;
  export function COLOR_RGBA2BGR565(...args: any): any;
  export function COLOR_RGBA2BGRA(...args: any): any;
  export function COLOR_RGBA2GRAY(...args: any): any;
  export function COLOR_RGBA2RGB(...args: any): any;
  export function COLOR_RGBA2YUV_I420(...args: any): any;
  export function COLOR_RGBA2YUV_IYUV(...args: any): any;
  export function COLOR_RGBA2YUV_YV12(...args: any): any;
  export function COLOR_RGBA2mRGBA(...args: any): any;
  export function COLOR_XYZ2BGR(...args: any): any;
  export function COLOR_XYZ2RGB(...args: any): any;
  export function COLOR_YCrCb2BGR(...args: any): any;
  export function COLOR_YCrCb2RGB(...args: any): any;
  export function COLOR_YUV2BGR(...args: any): any;
  export function COLOR_YUV2BGRA_I420(...args: any): any;
  export function COLOR_YUV2BGRA_IYUV(...args: any): any;
  export function COLOR_YUV2BGRA_NV12(...args: any): any;
  export function COLOR_YUV2BGRA_NV21(...args: any): any;
  export function COLOR_YUV2BGRA_UYNV(...args: any): any;
  export function COLOR_YUV2BGRA_UYVY(...args: any): any;
  export function COLOR_YUV2BGRA_Y422(...args: any): any;
  export function COLOR_YUV2BGRA_YUNV(...args: any): any;
  export function COLOR_YUV2BGRA_YUY2(...args: any): any;
  export function COLOR_YUV2BGRA_YUYV(...args: any): any;
  export function COLOR_YUV2BGRA_YV12(...args: any): any;
  export function COLOR_YUV2BGRA_YVYU(...args: any): any;
  export function COLOR_YUV2BGR_I420(...args: any): any;
  export function COLOR_YUV2BGR_IYUV(...args: any): any;
  export function COLOR_YUV2BGR_NV12(...args: any): any;
  export function COLOR_YUV2BGR_NV21(...args: any): any;
  export function COLOR_YUV2BGR_UYNV(...args: any): any;
  export function COLOR_YUV2BGR_UYVY(...args: any): any;
  export function COLOR_YUV2BGR_Y422(...args: any): any;
  export function COLOR_YUV2BGR_YUNV(...args: any): any;
  export function COLOR_YUV2BGR_YUY2(...args: any): any;
  export function COLOR_YUV2BGR_YUYV(...args: any): any;
  export function COLOR_YUV2BGR_YV12(...args: any): any;
  export function COLOR_YUV2BGR_YVYU(...args: any): any;
  export function COLOR_YUV2GRAY_420(...args: any): any;
  export function COLOR_YUV2GRAY_I420(...args: any): any;
  export function COLOR_YUV2GRAY_IYUV(...args: any): any;
  export function COLOR_YUV2GRAY_NV12(...args: any): any;
  export function COLOR_YUV2GRAY_NV21(...args: any): any;
  export function COLOR_YUV2GRAY_UYNV(...args: any): any;
  export function COLOR_YUV2GRAY_UYVY(...args: any): any;
  export function COLOR_YUV2GRAY_Y422(...args: any): any;
  export function COLOR_YUV2GRAY_YUNV(...args: any): any;
  export function COLOR_YUV2GRAY_YUY2(...args: any): any;
  export function COLOR_YUV2GRAY_YUYV(...args: any): any;
  export function COLOR_YUV2GRAY_YV12(...args: any): any;
  export function COLOR_YUV2GRAY_YVYU(...args: any): any;
  export function COLOR_YUV2RGB(...args: any): any;
  export function COLOR_YUV2RGBA_I420(...args: any): any;
  export function COLOR_YUV2RGBA_IYUV(...args: any): any;
  export function COLOR_YUV2RGBA_NV12(...args: any): any;
  export function COLOR_YUV2RGBA_NV21(...args: any): any;
  export function COLOR_YUV2RGBA_UYNV(...args: any): any;
  export function COLOR_YUV2RGBA_UYVY(...args: any): any;
  export function COLOR_YUV2RGBA_Y422(...args: any): any;
  export function COLOR_YUV2RGBA_YUNV(...args: any): any;
  export function COLOR_YUV2RGBA_YUY2(...args: any): any;
  export function COLOR_YUV2RGBA_YUYV(...args: any): any;
  export function COLOR_YUV2RGBA_YV12(...args: any): any;
  export function COLOR_YUV2RGBA_YVYU(...args: any): any;
  export function COLOR_YUV2RGB_I420(...args: any): any;
  export function COLOR_YUV2RGB_IYUV(...args: any): any;
  export function COLOR_YUV2RGB_NV12(...args: any): any;
  export function COLOR_YUV2RGB_NV21(...args: any): any;
  export function COLOR_YUV2RGB_UYNV(...args: any): any;
  export function COLOR_YUV2RGB_UYVY(...args: any): any;
  export function COLOR_YUV2RGB_Y422(...args: any): any;
  export function COLOR_YUV2RGB_YUNV(...args: any): any;
  export function COLOR_YUV2RGB_YUY2(...args: any): any;
  export function COLOR_YUV2RGB_YUYV(...args: any): any;
  export function COLOR_YUV2RGB_YV12(...args: any): any;
  export function COLOR_YUV2RGB_YVYU(...args: any): any;
  export function COLOR_YUV420p2BGR(...args: any): any;
  export function COLOR_YUV420p2BGRA(...args: any): any;
  export function COLOR_YUV420p2GRAY(...args: any): any;
  export function COLOR_YUV420p2RGB(...args: any): any;
  export function COLOR_YUV420p2RGBA(...args: any): any;
  export function COLOR_YUV420sp2BGR(...args: any): any;
  export function COLOR_YUV420sp2BGRA(...args: any): any;
  export function COLOR_YUV420sp2GRAY(...args: any): any;
  export function COLOR_YUV420sp2RGB(...args: any): any;
  export function COLOR_YUV420sp2RGBA(...args: any): any;
  export function COLOR_mRGBA2RGBA(...args: any): any;
  export function CONTOURS_MATCH_I1(...args: any): any;
  export function CONTOURS_MATCH_I2(...args: any): any;
  export function CONTOURS_MATCH_I3(...args: any): any;
  export function COVAR_COLS(...args: any): any;
  export function COVAR_NORMAL(...args: any): any;
  export function COVAR_ROWS(...args: any): any;
  export function COVAR_SCALE(...args: any): any;
  export function COVAR_SCRAMBLED(...args: any): any;
  export function COVAR_USE_AVG(...args: any): any;
  export function DCT_INVERSE(...args: any): any;
  export function DCT_ROWS(...args: any): any;
  export function DECOMP_CHOLESKY(...args: any): any;
  export function DECOMP_EIG(...args: any): any;
  export function DECOMP_LU(...args: any): any;
  export function DECOMP_NORMAL(...args: any): any;
  export function DECOMP_QR(...args: any): any;
  export function DECOMP_SVD(...args: any): any;
  export function DFT_COMPLEX_INPUT(...args: any): any;
  export function DFT_COMPLEX_OUTPUT(...args: any): any;
  export function DFT_INVERSE(...args: any): any;
  export function DFT_REAL_OUTPUT(...args: any): any;
  export function DFT_ROWS(...args: any): any;
  export function DFT_SCALE(...args: any): any;
  export function DISOpticalFlow_PRESET_FAST(...args: any): any;
  export function DISOpticalFlow_PRESET_MEDIUM(...args: any): any;
  export function DISOpticalFlow_PRESET_ULTRAFAST(...args: any): any;
  export function DIST_C(...args: any): any;
  export function DIST_FAIR(...args: any): any;
  export function DIST_HUBER(...args: any): any;
  export function DIST_L1(...args: any): any;
  export function DIST_L12(...args: any): any;
  export function DIST_L2(...args: any): any;
  export function DIST_LABEL_CCOMP(...args: any): any;
  export function DIST_LABEL_PIXEL(...args: any): any;
  export function DIST_MASK_3(...args: any): any;
  export function DIST_MASK_5(...args: any): any;
  export function DIST_MASK_PRECISE(...args: any): any;
  export function DIST_USER(...args: any): any;
  export function DIST_WELSCH(...args: any): any;
  export function DescriptorMatcher_BRUTEFORCE(...args: any): any;
  export function DescriptorMatcher_BRUTEFORCE_HAMMING(...args: any): any;
  export function DescriptorMatcher_BRUTEFORCE_HAMMINGLUT(...args: any): any;
  export function DescriptorMatcher_BRUTEFORCE_L1(...args: any): any;
  export function DescriptorMatcher_BRUTEFORCE_SL2(...args: any): any;
  export function DescriptorMatcher_FLANNBASED(...args: any): any;
  export function DrawMatchesFlags_DEFAULT(...args: any): any;
  export function DrawMatchesFlags_DRAW_OVER_OUTIMG(...args: any): any;
  export function DrawMatchesFlags_DRAW_RICH_KEYPOINTS(...args: any): any;
  export function DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS(...args: any): any;
  export function FILLED(...args: any): any;
  export function FILTER_SCHARR(...args: any): any;
  export function FLOODFILL_FIXED_RANGE(...args: any): any;
  export function FLOODFILL_MASK_ONLY(...args: any): any;
  export function FONT_HERSHEY_COMPLEX(...args: any): any;
  export function FONT_HERSHEY_COMPLEX_SMALL(...args: any): any;
  export function FONT_HERSHEY_DUPLEX(...args: any): any;
  export function FONT_HERSHEY_PLAIN(...args: any): any;
  export function FONT_HERSHEY_SCRIPT_COMPLEX(...args: any): any;
  export function FONT_HERSHEY_SCRIPT_SIMPLEX(...args: any): any;
  export function FONT_HERSHEY_SIMPLEX(...args: any): any;
  export function FONT_HERSHEY_TRIPLEX(...args: any): any;
  export function FONT_ITALIC(...args: any): any;
  export function FastFeatureDetector_FAST_N(...args: any): any;
  export function FastFeatureDetector_NONMAX_SUPPRESSION(...args: any): any;
  export function FastFeatureDetector_THRESHOLD(...args: any): any;
  export function FastFeatureDetector_TYPE_5_8(...args: any): any;
  export function FastFeatureDetector_TYPE_7_12(...args: any): any;
  export function FastFeatureDetector_TYPE_9_16(...args: any): any;
  export function FileNode_EMPTY(...args: any): any;
  export function FileNode_FLOAT(...args: any): any;
  export function FileNode_FLOW(...args: any): any;
  export function FileNode_INT(...args: any): any;
  export function FileNode_MAP(...args: any): any;
  export function FileNode_NAMED(...args: any): any;
  export function FileNode_NONE(...args: any): any;
  export function FileNode_REAL(...args: any): any;
  export function FileNode_SEQ(...args: any): any;
  export function FileNode_STR(...args: any): any;
  export function FileNode_STRING(...args: any): any;
  export function FileNode_TYPE_MASK(...args: any): any;
  export function FileNode_UNIFORM(...args: any): any;
  export function FileStorage_APPEND(...args: any): any;
  export function FileStorage_BASE64(...args: any): any;
  export function FileStorage_FORMAT_AUTO(...args: any): any;
  export function FileStorage_FORMAT_JSON(...args: any): any;
  export function FileStorage_FORMAT_MASK(...args: any): any;
  export function FileStorage_FORMAT_XML(...args: any): any;
  export function FileStorage_FORMAT_YAML(...args: any): any;
  export function FileStorage_INSIDE_MAP(...args: any): any;
  export function FileStorage_MEMORY(...args: any): any;
  export function FileStorage_NAME_EXPECTED(...args: any): any;
  export function FileStorage_READ(...args: any): any;
  export function FileStorage_UNDEFINED(...args: any): any;
  export function FileStorage_VALUE_EXPECTED(...args: any): any;
  export function FileStorage_WRITE(...args: any): any;
  export function FileStorage_WRITE_BASE64(...args: any): any;
  export function Formatter_FMT_C(...args: any): any;
  export function Formatter_FMT_CSV(...args: any): any;
  export function Formatter_FMT_DEFAULT(...args: any): any;
  export function Formatter_FMT_MATLAB(...args: any): any;
  export function Formatter_FMT_NUMPY(...args: any): any;
  export function Formatter_FMT_PYTHON(...args: any): any;
  export function GC_BGD(...args: any): any;
  export function GC_EVAL(...args: any): any;
  export function GC_EVAL_FREEZE_MODEL(...args: any): any;
  export function GC_FGD(...args: any): any;
  export function GC_INIT_WITH_MASK(...args: any): any;
  export function GC_INIT_WITH_RECT(...args: any): any;
  export function GC_PR_BGD(...args: any): any;
  export function GC_PR_FGD(...args: any): any;
  export function GEMM_1_T(...args: any): any;
  export function GEMM_2_T(...args: any): any;
  export function GEMM_3_T(...args: any): any;
  export function HISTCMP_BHATTACHARYYA(...args: any): any;
  export function HISTCMP_CHISQR(...args: any): any;
  export function HISTCMP_CHISQR_ALT(...args: any): any;
  export function HISTCMP_CORREL(...args: any): any;
  export function HISTCMP_HELLINGER(...args: any): any;
  export function HISTCMP_INTERSECT(...args: any): any;
  export function HISTCMP_KL_DIV(...args: any): any;
  export function HOGDescriptor_DEFAULT_NLEVELS(...args: any): any;
  export function HOGDescriptor_DESCR_FORMAT_COL_BY_COL(...args: any): any;
  export function HOGDescriptor_DESCR_FORMAT_ROW_BY_ROW(...args: any): any;
  export function HOGDescriptor_L2Hys(...args: any): any;
  export function HOUGH_GRADIENT(...args: any): any;
  export function HOUGH_MULTI_SCALE(...args: any): any;
  export function HOUGH_PROBABILISTIC(...args: any): any;
  export function HOUGH_STANDARD(...args: any): any;
  export function INPAINT_NS(...args: any): any;
  export function INPAINT_TELEA(...args: any): any;
  export function INTERSECT_FULL(...args: any): any;
  export function INTERSECT_NONE(...args: any): any;
  export function INTERSECT_PARTIAL(...args: any): any;
  export function INTER_AREA(...args: any): any;
  export function INTER_BITS(...args: any): any;
  export function INTER_BITS2(...args: any): any;
  export function INTER_CUBIC(...args: any): any;
  export function INTER_LANCZOS4(...args: any): any;
  export function INTER_LINEAR(...args: any): any;
  export function INTER_LINEAR_EXACT(...args: any): any;
  export function INTER_MAX(...args: any): any;
  export function INTER_NEAREST(...args: any): any;
  export function INTER_TAB_SIZE(...args: any): any;
  export function INTER_TAB_SIZE2(...args: any): any;
  export function KAZE_DIFF_CHARBONNIER(...args: any): any;
  export function KAZE_DIFF_PM_G1(...args: any): any;
  export function KAZE_DIFF_PM_G2(...args: any): any;
  export function KAZE_DIFF_WEICKERT(...args: any): any;
  export function KMEANS_PP_CENTERS(...args: any): any;
  export function KMEANS_RANDOM_CENTERS(...args: any): any;
  export function KMEANS_USE_INITIAL_LABELS(...args: any): any;
  export function LDR_SIZE(...args: any): any;
  export function LINE_4(...args: any): any;
  export function LINE_8(...args: any): any;
  export function LINE_AA(...args: any): any;
  export function LSD_REFINE_ADV(...args: any): any;
  export function LSD_REFINE_NONE(...args: any): any;
  export function LSD_REFINE_STD(...args: any): any;
  export function MARKER_CROSS(...args: any): any;
  export function MARKER_DIAMOND(...args: any): any;
  export function MARKER_SQUARE(...args: any): any;
  export function MARKER_STAR(...args: any): any;
  export function MARKER_TILTED_CROSS(...args: any): any;
  export function MARKER_TRIANGLE_DOWN(...args: any): any;
  export function MARKER_TRIANGLE_UP(...args: any): any;
  export function MIXED_CLONE(...args: any): any;
  export function MONOCHROME_TRANSFER(...args: any): any;
  export function MORPH_BLACKHAT(...args: any): any;
  export function MORPH_CLOSE(...args: any): any;
  export function MORPH_CROSS(...args: any): any;
  export function MORPH_DILATE(...args: any): any;
  export function MORPH_ELLIPSE(...args: any): any;
  export function MORPH_ERODE(...args: any): any;
  export function MORPH_GRADIENT(...args: any): any;
  export function MORPH_HITMISS(...args: any): any;
  export function MORPH_OPEN(...args: any): any;
  export function MORPH_RECT(...args: any): any;
  export function MORPH_TOPHAT(...args: any): any;
  export function MOTION_AFFINE(...args: any): any;
  export function MOTION_EUCLIDEAN(...args: any): any;
  export function MOTION_HOMOGRAPHY(...args: any): any;
  export function MOTION_TRANSLATION(...args: any): any;
  export function Mat_AUTO_STEP(...args: any): any;
  export function Mat_CONTINUOUS_FLAG(...args: any): any;
  export function Mat_DEPTH_MASK(...args: any): any;
  export function Mat_MAGIC_MASK(...args: any): any;
  export function Mat_MAGIC_VAL(...args: any): any;
  export function Mat_SUBMATRIX_FLAG(...args: any): any;
  export function Mat_TYPE_MASK(...args: any): any;
  export function NORMAL_CLONE(...args: any): any;
  export function NORMCONV_FILTER(...args: any): any;
  export function NORM_HAMMING(...args: any): any;
  export function NORM_HAMMING2(...args: any): any;
  export function NORM_INF(...args: any): any;
  export function NORM_L1(...args: any): any;
  export function NORM_L2(...args: any): any;
  export function NORM_L2SQR(...args: any): any;
  export function NORM_MINMAX(...args: any): any;
  export function NORM_RELATIVE(...args: any): any;
  export function NORM_TYPE_MASK(...args: any): any;
  export function OPTFLOW_FARNEBACK_GAUSSIAN(...args: any): any;
  export function OPTFLOW_LK_GET_MIN_EIGENVALS(...args: any): any;
  export function OPTFLOW_USE_INITIAL_FLOW(...args: any): any;
  export function ORB_FAST_SCORE(...args: any): any;
  export function ORB_HARRIS_SCORE(...args: any): any;
  export function PCA_DATA_AS_COL(...args: any): any;
  export function PCA_DATA_AS_ROW(...args: any): any;
  export function PCA_USE_AVG(...args: any): any;
  export function Param_ALGORITHM(...args: any): any;
  export function Param_BOOLEAN(...args: any): any;
  export function Param_FLOAT(...args: any): any;
  export function Param_INT(...args: any): any;
  export function Param_MAT(...args: any): any;
  export function Param_MAT_VECTOR(...args: any): any;
  export function Param_REAL(...args: any): any;
  export function Param_SCALAR(...args: any): any;
  export function Param_STRING(...args: any): any;
  export function Param_UCHAR(...args: any): any;
  export function Param_UINT64(...args: any): any;
  export function Param_UNSIGNED_INT(...args: any): any;
  export function RECURS_FILTER(...args: any): any;
  export function REDUCE_AVG(...args: any): any;
  export function REDUCE_MAX(...args: any): any;
  export function REDUCE_MIN(...args: any): any;
  export function REDUCE_SUM(...args: any): any;
  export function RETR_CCOMP(...args: any): any;
  export function RETR_EXTERNAL(...args: any): any;
  export function RETR_FLOODFILL(...args: any): any;
  export function RETR_LIST(...args: any): any;
  export function RETR_TREE(...args: any): any;
  export function RNG_NORMAL(...args: any): any;
  export function RNG_UNIFORM(...args: any): any;
  export function ROTATE_180(...args: any): any;
  export function ROTATE_90_CLOCKWISE(...args: any): any;
  export function ROTATE_90_COUNTERCLOCKWISE(...args: any): any;
  export function SOLVELP_MULTI(...args: any): any;
  export function SOLVELP_SINGLE(...args: any): any;
  export function SOLVELP_UNBOUNDED(...args: any): any;
  export function SOLVELP_UNFEASIBLE(...args: any): any;
  export function SORT_ASCENDING(...args: any): any;
  export function SORT_DESCENDING(...args: any): any;
  export function SORT_EVERY_COLUMN(...args: any): any;
  export function SORT_EVERY_ROW(...args: any): any;
  export function SVD_FULL_UV(...args: any): any;
  export function SVD_MODIFY_A(...args: any): any;
  export function SVD_NO_UV(...args: any): any;
  export function SparseMat_HASH_BIT(...args: any): any;
  export function SparseMat_HASH_SCALE(...args: any): any;
  export function SparseMat_MAGIC_VAL(...args: any): any;
  export function SparseMat_MAX_DIM(...args: any): any;
  export function Subdiv2D_NEXT_AROUND_DST(...args: any): any;
  export function Subdiv2D_NEXT_AROUND_LEFT(...args: any): any;
  export function Subdiv2D_NEXT_AROUND_ORG(...args: any): any;
  export function Subdiv2D_NEXT_AROUND_RIGHT(...args: any): any;
  export function Subdiv2D_PREV_AROUND_DST(...args: any): any;
  export function Subdiv2D_PREV_AROUND_LEFT(...args: any): any;
  export function Subdiv2D_PREV_AROUND_ORG(...args: any): any;
  export function Subdiv2D_PREV_AROUND_RIGHT(...args: any): any;
  export function Subdiv2D_PTLOC_ERROR(...args: any): any;
  export function Subdiv2D_PTLOC_INSIDE(...args: any): any;
  export function Subdiv2D_PTLOC_ON_EDGE(...args: any): any;
  export function Subdiv2D_PTLOC_OUTSIDE_RECT(...args: any): any;
  export function Subdiv2D_PTLOC_VERTEX(...args: any): any;
  export function THRESH_BINARY(...args: any): any;
  export function THRESH_BINARY_INV(...args: any): any;
  export function THRESH_MASK(...args: any): any;
  export function THRESH_OTSU(...args: any): any;
  export function THRESH_TOZERO(...args: any): any;
  export function THRESH_TOZERO_INV(...args: any): any;
  export function THRESH_TRIANGLE(...args: any): any;
  export function THRESH_TRUNC(...args: any): any;
  export function TM_CCOEFF(...args: any): any;
  export function TM_CCOEFF_NORMED(...args: any): any;
  export function TM_CCORR(...args: any): any;
  export function TM_CCORR_NORMED(...args: any): any;
  export function TM_SQDIFF(...args: any): any;
  export function TM_SQDIFF_NORMED(...args: any): any;
  export function TermCriteria_COUNT(...args: any): any;
  export function TermCriteria_EPS(...args: any): any;
  export function TermCriteria_MAX_ITER(...args: any): any;
  export function UMatData_ASYNC_CLEANUP(...args: any): any;
  export function UMatData_COPY_ON_MAP(...args: any): any;
  export function UMatData_DEVICE_COPY_OBSOLETE(...args: any): any;
  export function UMatData_DEVICE_MEM_MAPPED(...args: any): any;
  export function UMatData_HOST_COPY_OBSOLETE(...args: any): any;
  export function UMatData_TEMP_COPIED_UMAT(...args: any): any;
  export function UMatData_TEMP_UMAT(...args: any): any;
  export function UMatData_USER_ALLOCATED(...args: any): any;
  export function UMat_AUTO_STEP(...args: any): any;
  export function UMat_CONTINUOUS_FLAG(...args: any): any;
  export function UMat_DEPTH_MASK(...args: any): any;
  export function UMat_MAGIC_MASK(...args: any): any;
  export function UMat_MAGIC_VAL(...args: any): any;
  export function UMat_SUBMATRIX_FLAG(...args: any): any;
  export function UMat_TYPE_MASK(...args: any): any;
  export function USAGE_ALLOCATE_DEVICE_MEMORY(...args: any): any;
  export function USAGE_ALLOCATE_HOST_MEMORY(...args: any): any;
  export function USAGE_ALLOCATE_SHARED_MEMORY(...args: any): any;
  export function USAGE_DEFAULT(...args: any): any;
  export function WARP_FILL_OUTLIERS(...args: any): any;
  export function WARP_INVERSE_MAP(...args: any): any;
  export function WARP_POLAR_LINEAR(...args: any): any;
  export function WARP_POLAR_LOG(...args: any): any;
  export function _InputArray_CUDA_GPU_MAT(...args: any): any;
  export function _InputArray_CUDA_HOST_MEM(...args: any): any;
  export function _InputArray_EXPR(...args: any): any;
  export function _InputArray_FIXED_SIZE(...args: any): any;
  export function _InputArray_FIXED_TYPE(...args: any): any;
  export function _InputArray_KIND_MASK(...args: any): any;
  export function _InputArray_KIND_SHIFT(...args: any): any;
  export function _InputArray_MAT(...args: any): any;
  export function _InputArray_MATX(...args: any): any;
  export function _InputArray_NONE(...args: any): any;
  export function _InputArray_OPENGL_BUFFER(...args: any): any;
  export function _InputArray_STD_ARRAY(...args: any): any;
  export function _InputArray_STD_ARRAY_MAT(...args: any): any;
  export function _InputArray_STD_BOOL_VECTOR(...args: any): any;
  export function _InputArray_STD_VECTOR(...args: any): any;
  export function _InputArray_STD_VECTOR_CUDA_GPU_MAT(...args: any): any;
  export function _InputArray_STD_VECTOR_MAT(...args: any): any;
  export function _InputArray_STD_VECTOR_UMAT(...args: any): any;
  export function _InputArray_STD_VECTOR_VECTOR(...args: any): any;
  export function _InputArray_UMAT(...args: any): any;
  export function _OutputArray_DEPTH_MASK_16F(...args: any): any;
  export function _OutputArray_DEPTH_MASK_16S(...args: any): any;
  export function _OutputArray_DEPTH_MASK_16U(...args: any): any;
  export function _OutputArray_DEPTH_MASK_32F(...args: any): any;
  export function _OutputArray_DEPTH_MASK_32S(...args: any): any;
  export function _OutputArray_DEPTH_MASK_64F(...args: any): any;
  export function _OutputArray_DEPTH_MASK_8S(...args: any): any;
  export function _OutputArray_DEPTH_MASK_8U(...args: any): any;
  export function _OutputArray_DEPTH_MASK_ALL(...args: any): any;
  export function _OutputArray_DEPTH_MASK_ALL_16F(...args: any): any;
  export function _OutputArray_DEPTH_MASK_ALL_BUT_8S(...args: any): any;
  export function _OutputArray_DEPTH_MASK_FLT(...args: any): any;
  export function __UMAT_USAGE_FLAGS_32BIT(...args: any): any;
  export function BadAlign(...args: any): any;
  export function BadAlphaChannel(...args: any): any;
  export function BadCOI(...args: any): any;
  export function BadCallBack(...args: any): any;
  export function BadDataPtr(...args: any): any;
  export function BadDepth(...args: any): any;
  export function BadImageSize(...args: any): any;
  export function BadModelOrChSeq(...args: any): any;
  export function BadNumChannel1U(...args: any): any;
  export function BadNumChannels(...args: any): any;
  export function BadOffset(...args: any): any;
  export function BadOrder(...args: any): any;
  export function BadOrigin(...args: any): any;
  export function BadROISize(...args: any): any;
  export function BadStep(...args: any): any;
  export function BadTileSize(...args: any): any;
  export function GpuApiCallError(...args: any): any;
  export function GpuNotSupported(...args: any): any;
  export function HeaderIsNull(...args: any): any;
  export function MaskIsTiled(...args: any): any;
  export function OpenCLApiCallError(...args: any): any;
  export function OpenCLDoubleNotSupported(...args: any): any;
  export function OpenCLInitError(...args: any): any;
  export function OpenCLNoAMDBlasFft(...args: any): any;
  export function OpenGlApiCallError(...args: any): any;
  export function OpenGlNotSupported(...args: any): any;
  export function StsAssert(...args: any): any;
  export function StsAutoTrace(...args: any): any;
  export function StsBackTrace(...args: any): any;
  export function StsBadArg(...args: any): any;
  export function StsBadFlag(...args: any): any;
  export function StsBadFunc(...args: any): any;
  export function StsBadMask(...args: any): any;
  export function StsBadMemBlock(...args: any): any;
  export function StsBadPoint(...args: any): any;
  export function StsBadSize(...args: any): any;
  export function StsDivByZero(...args: any): any;
  export function StsError(...args: any): any;
  export function StsFilterOffsetErr(...args: any): any;
  export function StsFilterStructContentErr(...args: any): any;
  export function StsInplaceNotSupported(...args: any): any;
  export function StsInternal(...args: any): any;
  export function StsKernelStructContentErr(...args: any): any;
  export function StsNoConv(...args: any): any;
  export function StsNoMem(...args: any): any;
  export function StsNotImplemented(...args: any): any;
  export function StsNullPtr(...args: any): any;
  export function StsObjectNotFound(...args: any): any;
  export function StsOk(...args: any): any;
  export function StsOutOfRange(...args: any): any;
  export function StsParseError(...args: any): any;
  export function StsUnmatchedFormats(...args: any): any;
  export function StsUnmatchedSizes(...args: any): any;
  export function StsUnsupportedFormat(...args: any): any;
  export function StsVecLengthErr(...args: any): any;
  export function TEST_CUSTOM(...args: any): any;
  export function TEST_EQ(...args: any): any;
  export function TEST_GE(...args: any): any;
  export function TEST_GT(...args: any): any;
  export function TEST_LE(...args: any): any;
  export function TEST_LT(...args: any): any;
  export function TEST_NE(...args: any): any;
  export function DNN_BACKEND_DEFAULT(...args: any): any;
  export function DNN_BACKEND_HALIDE(...args: any): any;
  export function DNN_BACKEND_INFERENCE_ENGINE(...args: any): any;
  export function DNN_BACKEND_OPENCV(...args: any): any;
  export function DNN_BACKEND_VKCOM(...args: any): any;
  export function DNN_TARGET_CPU(...args: any): any;
  export function DNN_TARGET_FPGA(...args: any): any;
  export function DNN_TARGET_MYRIAD(...args: any): any;
  export function DNN_TARGET_OPENCL(...args: any): any;
  export function DNN_TARGET_OPENCL_FP16(...args: any): any;
  export function DNN_TARGET_VULKAN(...args: any): any;
  export function FLAGS_EXPAND_SAME_NAMES(...args: any): any;
  export function FLAGS_MAPPING(...args: any): any;
  export function FLAGS_NONE(...args: any): any;
  export function IMPL_IPP(...args: any): any;
  export function IMPL_OPENCL(...args: any): any;
  export function IMPL_PLAIN(...args: any): any;
  export function TYPE_FUN(...args: any): any;
  export function TYPE_GENERAL(...args: any): any;
  export function TYPE_MARKER(...args: any): any;
  export function TYPE_WRAPPER(...args: any): any;
  export function imread(...args: any): any;
  export function imshow(...args: any): any;
  export function VideoCapture(...args: any): any;
  export function Range(...args: any): any;
  export function Point(...args: any): any;
  export function Size(...args: any): any;
  export function Rect(...args: any): any;
  export function RotatedRect(...args: any): any;
  export function Scalar(...args: any): any;
  export function MinMaxLoc(...args: any): any;
  export function Circle(...args: any): any;
  export function TermCriteria(...args: any): any;
  export function matFromArray(...args: any): any;
  export function matFromImageData(...args: any): any;
}
