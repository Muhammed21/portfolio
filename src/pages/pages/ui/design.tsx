import { Button } from "@/design/cta/Button";
import { Link } from "@/design/link/Link";
import { Typographie } from "@/design/typographie/Typographie";
import clsx from "clsx";

export default function Design() {
  return (
    <section className="flex flex-col gap-10 py-10">
      <div
        className={clsx(`flex border-2 border-[#000000] w-max h-max bg-white`)}
      >
        {/* Typo SECTION */}
        <div
          className={clsx(
            `flex flex-col items-start border-r-2 border-[#000000] w-full h-max`
          )}
        >
          <div
            className={clsx(`w-full h-max p-10 border-b-2 border-[#000000]`)}
          >
            <Typographie
              size="h2"
              balise="span"
              weight="bold"
              className="text-black-100"
            >
              Typographie Regular
            </Typographie>
          </div>
          <div className="flex flex-col p-10 gap-12">
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H1 - 150px
              </Typographie>
              <Typographie
                size="h1"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h2 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H2 - 20px
              </Typographie>
              <Typographie
                size="h2"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h3 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H3 - 16px
              </Typographie>
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h4 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H4 - 15px
              </Typographie>
              <Typographie
                size="h4"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h5 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H5 - 12px
              </Typographie>
              <Typographie
                size="h5"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            `flex flex-col items-start w-full h-max border-r-2 border-[#000000]`
          )}
        >
          <div
            className={clsx(`w-full h-max p-10 border-b-2 border-[#000000]`)}
          >
            <Typographie
              size="h2"
              balise="span"
              weight="bold"
              className="text-black-100"
            >
              Typographie Medium
            </Typographie>
          </div>
          <div className="flex flex-col p-10 gap-12">
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H1 - 150px
              </Typographie>
              <Typographie
                size="h1"
                balise="span"
                weight="medium"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h2 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H2 - 20px
              </Typographie>
              <Typographie
                size="h2"
                balise="span"
                weight="medium"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h3 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H3 - 16px
              </Typographie>
              <Typographie
                size="h3"
                balise="span"
                weight="medium"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h4 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H4 - 15px
              </Typographie>
              <Typographie
                size="h4"
                balise="span"
                weight="medium"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h5 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H5 - 12px
              </Typographie>
              <Typographie
                size="h5"
                balise="span"
                weight="medium"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full h-max">
          <div
            className={clsx(`w-full h-max p-10 border-b-2 border-[#000000]`)}
          >
            <Typographie
              size="h2"
              balise="span"
              weight="bold"
              className="text-black-100"
            >
              Typographie Bold
            </Typographie>
          </div>
          <div className="flex flex-col p-10 gap-12">
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H1 - 150px
              </Typographie>
              <Typographie
                size="h1"
                balise="span"
                weight="bold"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h2 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H2 - 20px
              </Typographie>
              <Typographie
                size="h2"
                balise="span"
                weight="bold"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h3 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H3 - 16px
              </Typographie>
              <Typographie
                size="h3"
                balise="span"
                weight="bold"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h4 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H4 - 15px
              </Typographie>
              <Typographie
                size="h4"
                balise="span"
                weight="bold"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
            {/* h5 */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                H5 - 12px
              </Typographie>
              <Typographie
                size="h5"
                balise="span"
                weight="bold"
                className="text-black-100"
              >
                Lorem
              </Typographie>
            </div>
          </div>
        </div>
        {/* Fin Typo SECTION */}
      </div>
      <div
        className={clsx(`flex border-2 border-[#000000] w-max h-max bg-white`)}
      >
        <div className="flex flex-col border-r-2 border-black-100 items-start w-full h-max">
          <div
            className={clsx(`w-full h-max p-10 border-b-2 border-[#000000]`)}
          >
            <Typographie
              size="h2"
              balise="span"
              weight="bold"
              className="text-black-100"
            >
              Button state
            </Typographie>
          </div>
          <div className="flex flex-col w-full p-10 gap-12 bg-bgColors">
            <div className="flex flex-col gap-2 w-full items-start">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                themeBtn
              </Typographie>
              <Button
                variant="themeBtn"
                onClick={() => console.log("theme btn clicked!")}
              />
            </div>
            {/* disable */}
            <div className="flex flex-col gap-2 w-full items-start">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                disable
              </Typographie>
              <Button variant="themeBtn" disable />
            </div>
            {/* loading */}
            <div className="flex flex-col gap-2 w-full items-start">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                disable
              </Typographie>
              <Button variant="themeBtn" isLoading />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full">
          <div className={clsx(`w-full p-10 border-b-2 border-[#000000]`)}>
            <Typographie
              size="h2"
              balise="span"
              weight="bold"
              className="text-black-100"
            >
              Link
            </Typographie>
          </div>
          <div className="flex flex-col w-full h-full justify-between p-10 gap-12 bg-bgColors">
            <div className="flex flex-col gap-2 w-full items-start">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                Header link
              </Typographie>
              <Link variant="Basic" socialName="Axis Studio" />
            </div>
            {/* Footer link */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                Footer link
              </Typographie>
              <Link
                variant="Footer"
                socialName="(@)"
                fullName="mcavus048@gmail.Com"
                icon
              />
            </div>
            {/* Footer link icon none */}
            <div className="flex flex-col gap-2 w-full">
              <Typographie
                size="h3"
                balise="span"
                weight="regular"
                className="text-black-100"
              >
                Footer link
              </Typographie>
              <Link
                variant="Footer"
                socialName="(@)"
                fullName="mcavus048@gmail.Com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
