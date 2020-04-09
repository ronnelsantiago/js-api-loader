/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @ignore
 */
declare global {
  interface Window {
    __googleMapsCallback: (e: Event) => void;
  }
}

type Libraries = ("drawing" | "geometry" | "places" | "visualization")[];

/**
 * The Google Maps JavaScript API
 * [documentation](https://developers.google.com/maps/documentation/javascript/tutorial)
 * is the authoritative source for [[LoaderOptions]].
 */
export interface LoaderOptions {
  /**
   * See https://developers.google.com/maps/documentation/javascript/get-api-key.
   */
  apiKey: string;
  /**
   * In your application you can specify release channels or version numbers:
   *
   * The weekly channel is specified with `version=weekly`. This channel is
   * updated once per week, and is the most current.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly'});
   * ```
   *
   * The quarterly channel is specified with `version=quarterly`. This channel
   * is updated once per quarter, and is the most predictable.
   *
   * ```
   * const loader = Loader({apiKey, version: 'quarterly'});
   * ```
   *
   * The version number is specified with `version=n.nn`. You can choose
   * `version=3.40`, `version=3.39`, or `version=3.38`. Version numbers are
   * updated once per quarter.
   *
   * ```
   * const loader = Loader({apiKey, version: '3.40'});
   * ```
   *
   * If you do not explicitly specify a channel or version, you will receive the
   * weekly channel by default. If you specify an invalid version, you will
   * receive your default channel.
   */
  version?: string;
  /**
   * When loading the Maps JavaScript API via the URL you may optionally load
   * additional libraries through use of the libraries URL parameter. Libraries
   * are modules of code that provide additional functionality to the main Maps
   * JavaScript API but are not loaded unless you specifically request them.
   *
   * ```
   * const loader = Loader({
   *  apiKey,
   *  libraries: ['drawing', 'geometry', 'places', 'visualization'],
   * });
   * ```
   *
   * Set the [list of libraries](https://developers.google.com/maps/documentation/javascript/libraries) for more options.
   */
  libraries?: Libraries;
  /**
   * By default, the Maps JavaScript API uses the user's preferred language
   * setting as specified in the browser, when displaying textual information
   * such as the names for controls, copyright notices, driving directions and
   * labels on maps. In most cases, it's preferable to respect the browser
   * setting. However, if you want the Maps JavaScript API to ignore the
   * browser's language setting, you can force it to display information in a
   * particular language when loading the Maps JavaScript API code.
   *
   * For example, the following example localizes the language to the United
   * Kingdom:
   *
   * ```
   * const loader = Loader({apiKey, language: 'ja', region: 'JP'});
   * ```
   *
   * See the [list of supported
   * languages](https://developers.google.com/maps/faq#languagesupport). Note
   * that new languages are added often, so this list may not be exhaustive.
   *
   */
  language?: string;
  /**
   * When you load the Maps JavaScript API from maps.googleapis.com it applies a
   * default bias for application behavior towards the United States. If you
   * want to alter your application to serve different map tiles or bias the
   * application (such as biasing geocoding results towards the region), you can
   * override this default behavior by adding a region parameter when loading
   * the Maps JavaScript API code.
   *
   * The region parameter accepts Unicode region subtag identifiers which
   * (generally) have a one-to-one mapping to country code Top-Level Domains
   * (ccTLDs). Most Unicode region identifiers are identical to ISO 3166-1
   * codes, with some notable exceptions. For example, Great Britain's ccTLD is
   * "uk" (corresponding to the domain .co.uk) while its region identifier is
   * "GB."
   *
   * For example, the following example localizes the map to the United Kingdom:
   *
   * ```
   * const loader = Loader({apiKey, region: 'GB'});
   * ```
   */
  region?: string;
}

/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then(() => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
export class Loader {
  /**
   * See [[LoaderOptions.version]]
   */
  version: string;
  /**
   * See [[LoaderOptions.apiKey]]
   */
  apiKey: string;
  /**
   * See [[LoaderOptions.libraries]]
   */
  libraries: Libraries;
  /**
   * See [[LoaderOptions.language]]
   */
  language: string;

  /**
   * See [[LoaderOptions.region]]
   */
  region: string;

  private CALLBACK = "__googleMapsCallback";
  private URL = "https://maps.googleapis.com/maps/api/js";
  private callbacks: ((e: Event) => void)[] = [];
  private done = false;
  private loading = false;
  private onerrorEvent: Event;

  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor({
    apiKey,
    libraries = [],
    language,
    region,
    version,
  }: LoaderOptions) {
    if (typeof apiKey !== "string" || !apiKey) {
      throw "Invalid apiKey " + apiKey;
    }

    this.version = version;
    this.apiKey = apiKey;
    this.libraries = libraries;
    this.language = language;
    this.region = region;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   */
  createUrl(): string {
    let url = this.URL;

    url += `?callback=${this.CALLBACK}`;
    url += `&key=${this.apiKey}`;

    if (this.libraries.length > 0) {
      url += `&libraries=${this.libraries.join(",")}`;
    }

    if (this.language) {
      url += `&language=${this.language}`;
    }

    if (this.region) {
      url += `&region=${this.region}`;
    }

    if (this.version) {
      url += `&v=${this.version}`;
    }

    return url;
  }

  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   */
  load(): Promise<void> {
    return this.loadPromise();
  }

  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   */
  loadPromise(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.loadCallback((err: Event) => {
        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      });
    });
  }

  /**
   * Load the Google Maps JavaScript API script with a callback.
   */
  loadCallback(fn: (e: Event) => void): void {
    this.callbacks.push(fn);
    this.execute();
  }

  /**
   * Set the script on document.
   */
  private setScript(): void {
    const url = this.createUrl();
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src = url;
    script.onerror = this.loadErrorCallback.bind(this);
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
  }

  private loadErrorCallback(e: Event): void {
    this.onerrorEvent = e;
    this.callback();
  }

  private setCallback(): void {
    window.__googleMapsCallback = this.callback.bind(this);
  }

  private callback(): void {
    this.done = true;
    this.loading = false;

    this.callbacks.forEach((cb) => {
      cb(this.onerrorEvent);
    });

    this.callbacks = [];
  }

  private execute(): void {
    if (this.done) {
      this.callback();
    } else {
      if (this.loading) {
        // do nothing but wait
      } else {
        this.loading = true;
        this.setCallback();
        this.setScript();
      }
    }
  }
}
