import Link from "next/link";
import Endpoint from "./Endpoint";

export default function About() {
    return (
        <div className="text-md flex flex-col">
            <span>
                {'> A free REST API for random Drake quotes (Drake as a Service)'}
            </span>
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    GET:
                </h2>
                <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                    <Endpoint
                        path="/api/quotes/random"
                        color="green"
                        description="get JSON random quote"
                    />
                    <Endpoint
                        path="/api/quotes/all"
                        color="red"
                        description="get JSON of all quotes"
                    />
                    <Endpoint
                        path="/api/_info"
                        color="blue"
                        description="get JSON of API info-manual"
                    />
                </ul>
            </div>
        </div>
    )
}
