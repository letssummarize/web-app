interface EndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  request?: Record<string, unknown>;
  response?: Record<string, unknown>;
}

function Endpoint({ method, path, description, request, response }: EndpointProps) {
  return (
    <div className="card bg-base-200 shadow-xl mb-4">
      <div className="card-body">
        <div className="flex items-center gap-2">
          <span className={`badge ${method === 'GET' ? 'badge-info' : 'badge-accent'}`}>
            {method}
          </span>
          <h3 className="card-title font-mono">{path}</h3>
        </div>
        <p className="mt-2 text-base-content/80">{description}</p>

        {request && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Request Body:</h4>
            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
              {JSON.stringify(request, null, 2)}
            </pre>
          </div>
        )}

        {response && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Response:</h4>
            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Endpoint;
